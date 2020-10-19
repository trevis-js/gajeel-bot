const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
    var d = db.get(`reais_${message.author.id}`)

    

    let loja1 = new Discord.MessageEmbed()
    .setTitle('<:g_store:736350896912597002> Loja 1')
    .setDescription('Reaja com os emojis para comprar as comidas:\n\n__<:g_queijo:736958367783976992> - 100 cruzeiros__\n__<:g_pimenta:736958349496680489> - 150 cruzeiros__\n__<:g_combo:736958271541477438> - 450 cruzeiros__\n<:g_cup:736958303715852328> - 200 cruzeiros\n<:g_cookie:736958283511758930> - 250 cruzeiros\n<:g_choc:736958246975307866> - 300 cruzeiros')
    var qualloja = args[0]
    if(qualloja === '1') return message.channel.send(loja1).then(msg1 => {
        msg1.react('736958367783976992').then(r => {

        })
        msg1.react('736958349496680489').then(r => {
            
        })
        msg1.react('736958271541477438').then(r => {
            
        })
        msg1.react('736958271541477438').then(r => {
            
        })
        msg1.react('736958283511758930').then(r => {
            
        })
        msg1.react('736958246975307866').then(r => {

        })
        msg1.react('736958227899613277').then(r => {

        })
        msg1.react('736958222979563570').then(r => {

        })
        msg1.react('736958098811387905').then(r => {

        })
        setTimeout(() => {
            msg1.delete()
        }, 180000);
        const QueijoFilter = (reaction, user, ) => reaction.emoji.id === `736958367783976992` && user.id === message.author.id;
        const PimentaFilter = (reaction, user, ) => reaction.emoji.id === `736958349496680489` && user.id === message.author.id;
        const ComboFilter = (reaction, user, ) => reaction.emoji.id === `736958271541477438` && user.id === message.author.id;
        const Q = msg1.createReactionCollector(QueijoFilter);
        const P = msg1.createReactionCollector(PimentaFilter);
        const C = msg1.createReactionCollector(ComboFilter);

        Q.on('collect', r2 => {
            if(d < 100) return message.reply(`OPS! Parece que você não possui cruzeiros suficientes, aqui na loja ${args[0]} não vendemos FIADO!!!`)
            db.subtract(`reais_${message.author.id}`, 100)
            db.add(`Queijo_${message.author.id}`, 1)
            db.add(`comida_${message.author.id}`, 1)
           
            message.reply(`Queijo comprado e adicionado ao inventário(g!inv)!`)
        })
        P.on('collect', r2 => {
            if(d < 150) return message.reply(`OPS! Parece que você não possui cruzeiros suficientes, aqui na loja ${args[0]} não vendemos FIADO!!!`)
            db.subtract(`reais_${message.author.id}`, 150)
            db.add(`Pimenta_${message.author.id}`, 1)
            db.add(`comida_${message.author.id}`, 1)
         
            message.reply(`pimenta comprada e adicionada ao inventário(g!inv)!`)
        })
        C.on('collect', r2 => {
            if(d < 450) return message.reply(`OPS! Parece que você não possui cruzeiros suficientes, aqui na loja ${args[0]} não vendemos FIADO!!!`)
            db.subtract(`reais_${message.author.id}`, 450)
            db.add(`Combo_${message.author.id}`, 1)
            db.add(`comida_${message.author.id}`, 1)
            message.reply(`combo comprado e adicionado ao inventário(g!inv)`)
        })
    })
}
exports.help = {
    name: 'loja',
    aliases: ['shop',]
}