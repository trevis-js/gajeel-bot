const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setTitle("**🏓 PONG!**")
    .setDescription(`Meu ping é de: \`${parseInt(bot.ws.ping)}\``)
    .setThumbnail('https://cdn.discordapp.com/attachments/695396953063948358/706298933659566131/ping_pong_geraldo_bot.gif')
    message.channel.send(embed)
}

exports.help = {
    name: 'ping',
    aliases: []
}