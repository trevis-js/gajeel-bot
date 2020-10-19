const db = require('quick.db');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var gif = db.get(`gifs_${message.author.id}`)
    if(!gif) return message.reply('parece que você não setou um gif!')
    const embed = new Discord.MessageEmbed()
    .setTitle('Seu gif é:')
    .setImage(gif)
    .setColor('#8001ff')
    message.channel.send(embed)
}
exports.help = {
    name: 'mygif',
    aliases: []
}