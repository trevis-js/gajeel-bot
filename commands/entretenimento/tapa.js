const Discord = require('discord.js');
const superagent = require('superagent');
const c = require('../../config.json');

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    let socaum = new Discord.MessageEmbed()
    .setTitle('Ah é, vai me bater?!')
    if (!message.mentions.users.first()) return message.reply(`por favor mencione um membro!`);
    if (message.mentions.users.first().id === "693261042402328576") return message.channel.send(socaum).then(soco => {
        let socaum2 = new Discord.MessageEmbed()
        .setTitle('Ah é, vai me bater?!')
        .setDescription('**ENTÃO TOMAAA!!!**')
        .setImage('https://cdn.discordapp.com/attachments/718100514461450303/734929595693793320/socaum.gif')
        .setColor("#ebb63b")
        setTimeout(() => {
            soco.edit(socaum2)
        }, 5000);
    });
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ebb63b")
    .setDescription(`**${message.author.username} deu um tapão em ${message.mentions.users.first().username}. Vish eu não deixava!**`)
    .setImage(body.url) 
    message.channel.send({embed}).then(msg => {
        msg.react(`🔁`).then(r => {

        })

        const RetornoFilter = (reaction, user, ) => reaction.emoji.name === `🔁` && user.id === message.mentions.users.first().id 
        const Retorno = msg.createReactionCollector(RetornoFilter)

        Retorno.on('collect', r2 => {
            const dnv = new Discord.MessageEmbed()
            .setColor("#ebb63b")
            .setDescription(`**${message.mentions.users.first().username} deu um tapão em ${message.author.username}. Vish eu não deixava!**`)
            .setImage(body.url) 
            .setFooter('Reaja com 🔁 para revidar')
            message.channel.send(dnv)
        })
    })
}
exports.help = {
    name: 'tapa',
    aliases: ['slap']
}