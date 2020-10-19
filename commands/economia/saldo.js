const db = require('quick.db');
const Discord = require("discord.js");

exports.run = (client, message, args) => {

    const member = message.mentions.users.first() || message.author;
  
    var reais = db.get(`reais_${member.id}`)
    if (!reais) reais === '0'
    var flocos = db.get(`flocos_${member.id}`)
    if(!flocos) flocos === '0'
  
    let embed = new Discord.MessageEmbed()
    .setTitle('🏦 Saldo')
    .setDescription(`<a:g_floco:738419862183084084> Flocos: **${flocos}** \n<a:g_money:722028377829277707> Saldo Atual: **${reais} cruzeiros**`)
    .setColor('#ffff99')
    .setFooter(`Proprietário da conta: ${member.tag}`)

    message.channel.send(embed).then(msg => {

 setTimeout(() => {
     msg.delete()
 }, 300000);
})
}
exports.help = {
    name: "saldo",
    aliases: ['dinheiro']
}