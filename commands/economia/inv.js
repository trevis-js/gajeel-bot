const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
    var comida = db.get(`comida_${message.author.id}`)
    if(!comida) comida = '0'
    var queijo = db.get(`Queijo_${message.author.id}`)
    if(!queijo) queijo = '0'
    var pimenta = db.get(`Pimenta_${message.author.id}`)
    if(!pimenta) pimenta = '0'
    var combo = db.get(`Combo_${message.author.id}`)
    if(!combo) combo = '0'
    let inv = new Discord.MessageEmbed()
    .setTitle('🎒 Inventário')
    .setDescription(`🍽️ Comidas: ${comida}`)
    .setFooter('Tudo o que comprar na loja aparecerá aqui')
    .setThumbnail('https://cdn.discordapp.com/attachments/710149285513003038/737133753486540880/emoji_15.png')
    message.channel.send(`${message.author}`, inv).then(msg => {
        msg.react('🍽️').then(r => {

        })
        const ComidaFilter  = (reaction, user, ) => reaction.emoji.name === `🍽️` && user.id === message.author.id;
        const comida2 = msg.createReactionCollector(ComidaFilter)
        comida2.on('collect', r2 => {
            const comidas = new Discord.MessageEmbed()
            .setTitle('🍽️ Comidas')
            .setDescription(`🧀 Queijo: ${queijo}\n🌶️ Pimenta: ${pimenta}\n🍔 Combo: ${combo}`)
            .setFooter('Essas são suas comidas. Use g!comer [comida] para come-las')
            msg.edit(comidas)
        })
    })
}
exports.help = {
    name: 'inv',
    aliases: ['inventario', 'bag', 'mochila']
}