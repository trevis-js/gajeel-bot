const db = require('quick.db');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem setar o canal de logs staff`)
    
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(Embed)
var channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
var canal = db.set(`punichannel_${message.guild.id}`, channel.id)
const embed = new Discord.MessageEmbed()
.setTitle('Módulo Logs')
.setDescription(`<a:aCheak:711593224061583380> | Canal de Log Staff setado para:\`${channel.name}\``)
.setFooter('Para mais informações digite: g!dashboard')
   message.channel.send(embed)
}
exports.help = {
    name: 'logs-staff',
    aliases: ['modlog', 'stafflog']
}