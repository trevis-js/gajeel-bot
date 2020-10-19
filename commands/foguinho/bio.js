const db = require('quick.db')
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const bio = db.set(`desc_${message.author.id}`, args.join(" ").trim())
    if (!args[0]) return message.channel.send(`**${message.author.username}, coloque alguma messagem para a sua belíssima biografia**`)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo Foguinho`)
    .setDescription(`<a:aCheak:711593224061583380> | Biografia setada para: \`${bio}\``)
    .setColor('GREEN')
    .setFooter('Para ver seu perfil use: g!perfil')
    .setTimestamp()
    .setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024}))
    message.channel.send(embed)
}
exports.help = {
    name: 'biografia',
    aliases: ['bio', 'setbio']
}