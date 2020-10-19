const db = require('quick.db');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem setar seu gif para ban's`)
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(Embed)
    var gif = db.set(`gifs_${message.author.id}`, args[0])
    const embed = new Discord.MessageEmbed()
    .setTitle('GIF PARA BAN SETADO!')
    .setDescription('Seu gif para ban é:')
    .setImage(args[0])
    .setColor('GREEN')
    message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'setgif',
    aliases: ['addgif']
}