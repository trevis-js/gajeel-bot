const Discord = require('discord.js')
exports.run = async (client, message, args) => { 
   const embed2 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Minhas permissões aqui no ${message.guild} não me deixam destrancar esse canal!`)
   const embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem destrancar este canal!`)     
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed).then(deletei => {
      setTimeout(() => {
          deletei.delete();
          }, 20000) 
          })  
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embed2).then(deleteiu => {
      setTimeout(() => {
          deleteiu.delete();
          }, 20000) 
          })  
    let idc = message.channel
    let geral = message.guild.roles.cache.find(x => x.name == '@everyone')
    idc.overwritePermissions([
        {
           id: geral,
           allow: ['SEND_MESSAGES'],
        }
      ])

   message.channel.send(":unlock: | Canal Destrancado com Sucesso!")     
}
exports.help = {
    name: "unlock",
    aliases: ['destrancar', 'chat-on']
}