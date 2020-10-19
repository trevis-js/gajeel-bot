const db = require('quick.db');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  //let mebed = new Discord.MessageEmbed()
  //.setTitle('<a:nop:718494836272922766> OPS!')
  //.setDescription('Parece que este comando está offline ;-;. Tente novamente amanhã!')
  //.setFooter('Atenciosamente: Gajeel Developer')
    //if (!['414170295843160065', '693261042402328576'].includes(message.author.id)) {
    //return message.channel.send(mebed).then(msg => {
     // setTimeout(() => {
      //  msg.delete()
      //}, 15000);
   // })
  
    var autoChannel = db.get(`autoChannel_${message.guild.id}`)
    var mensagem = db.get(`mensagem_${message.guild.id}`)
    var logs = db.get(`punichannel_${message.guild.id}`)
    var logs2 = db.get(`logs_${message.guild.id}`)
    var role = db.get(`autoRole_${message.guild.id}`)
    if (!message.member.hasPermission('ADMINISTRATOR'))
      return message.reply('Função apenas para Administradores!')
    if(!autoChannel) autoChannel = "Nenhum canal definido, para definir utilize **g!wlc-channel #canal**"
    if(!mensagem) mensagem = "Nenhuma mensagem definida, para definir utilize **g!wlc <mensagem>**"
     if(!logs)  logs = 'Nenhum canal foi definido, para definir utilize **g!logs-staff #canal**'
     if(!logs2)  logs2 = 'Nenhum canal foi definido, para definir utilize **g!logs #canal**'
     if(!role) role = 'Nenhum cargo foi definido, para definir utilize **g!autorole @cargo**'
    
  
   let embed = new Discord.MessageEmbed()
   
   .setTitle(`<:firewall:711592389227315302> Dashboard de ${message.guild}`)
   .setDescription(`<:dados:718962740584120330> Módulo 1(Bem Vindo):\n\nMensagem bem vindo: *${mensagem}*\nCanal de bem vindo: <#${autoChannel}>\nAutoRole: <@&${role}>\n\n<:dados:718962740584120330> Módulo 2(Moderação/Logs):\n\nCanal de logs staff: <#${logs}>\nCanal de logs: <#${logs2}>`)
   .setColor('BLUE')
   
   message.channel.send(embed)
      }
exports.help = {
    name: 'dashboard',
    aliases: ['painel', 'configs']
}