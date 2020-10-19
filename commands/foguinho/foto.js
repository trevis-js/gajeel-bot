const db = require('quick.db');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(!args[0]) return message.reply('Insira o link de uma imagem')
    var gif = db.set(`ft_${message.author.id}`, args[0])
    const embed = new Discord.MessageEmbed()
    .setTitle('Módulo Foguinho')
    .setDescription('<a:aCheak:711593224061583380> | Foto setada para:')
    .setImage(args[0])
    .setColor('GREEN')
    message.channel.send(embed)
}
exports.help = {
    name: 'foto',
    aliases: ['setfoto']
}