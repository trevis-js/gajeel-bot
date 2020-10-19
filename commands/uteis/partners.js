const Discord = require("discord.js")
const db = require('quick.db');

exports.run = async (client, message, args) => {
    var nome = db.get(`sv_`)
    if(!nome) nome = 'Nenhum servidor cadastrado!'
    var link = db.get(`link_`)
    if(!link) link = 'https://gajeel.glitch.me'
    var owner = db.get(`dono_`)
    if(!owner) owner = 'Nenhum dono de servidor cadastrado!'
    var name = (`[${nome}](${link})`)
    let embed = new Discord.MessageEmbed()
    .setTitle('<:g_partner:702829869792493618> Parceiros')
    .setDescription(`<:emoji_26:696171741734633483> Nome do servidor: ${name}\n<:IconCrown:711594381827637399> Dono do servidor: ${owner}`)
    message.channel.send(embed)
}
exports.help = {
    name: 'partners',
    aliases: ['parceiros']
}