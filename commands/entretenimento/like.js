const Discord = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms')
                                
exports.run = async (client, message, args) => { 
    let timeout = 10800000 
    let tempo = await db.fetch(`tempo_${message.author.id}`);

    if (tempo !== null && timeout - (Date.now() - tempo) > 0) {
        let time = ms(timeout - (Date.now() - tempo));
        const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Parece que você já utilizou seu like! Tente novamente em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``).setColor('#ff0000')
        message.channel.send(Embed)
} else {
    let member = message.mentions.users.first()
    if (member === message.author) return message.channel.send(`**${message.author.username}, você não pode dar like em você mesmo! Mas admiro seu amor prórpio.`)
    if (!member) return message.channel.send(`${message.author}, insira membro para dar like.`)

    let embed = new Discord.MessageEmbed()
    .setTitle('<:g_tinder:731218404546969620> Like')
    .setDescription(`<a:g_like:731506317017219175> Usuário: ${member.tag}\n<a:g_like:731506317017219175> Autor do Like: ${message.author.tag}\nHmmmm! Será que vai dar casal?!`)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Para retribuir o like reaja com ️️❤️`)
    .setColor('#df1313')

    message.channel.send(embed).then(msg => {
        msg.react('❤️').then(r => {

        })
        const UmFilter = (reaction, user, ) => reaction.emoji.name === '❤️' && user.id === member.id;
        const Um = msg.createReactionCollector(UmFilter);
        Um.on('collect', r2 => {
            db.add(`rep_${message.author.id}`, 1)
            db.set(`tempo_${member.id}`, Date.now())
            let embed = new Discord.MessageEmbed()
            .setTitle('<:g_tinder:731218404546969620> Like')
            .setDescription(`<a:g_like:731506317017219175> Usuário: ${message.author.tag}\n<a:g_like:731506317017219175> Autor do Like: ${member.tag}\nHmmmm! Será que vai dar casal?!`)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`Like retribuido`)
            .setColor('#df1313')
        
            message.channel.send(embed)
        })
    }) 
    db.add(`rep_${member.id}`, 1)
    db.set(`tempo_${message.author.id}`, Date.now())
        }
}

exports.help = {
    name: 'like', 
    aliases: ['curtir'] 
}