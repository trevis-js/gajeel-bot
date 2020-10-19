const Discord = require('discord.js')
exports.run = async (client, message, args) => { 
  const embed2 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Minhas permissões aqui no ${message.guild} não me deixam trancar esse canal!`)     
  const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe deixam trancar um canal!`)  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(Embed).then(deletei => {
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
           deny: ['SEND_MESSAGES'],
        }
      ])
      const embed = new Discord.MessageEmbed()
      .setTitle(":lock: | Canal Trancado com Sucesso!")
      .setDescription("\`Para destrancar o chat reaja com 🔓 ou utiize **g!unlock** e destrave manualmente!\`")
      .setFooter(`Canal trancado por ${message.author.username}`)
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/690254127451603054/706289354389323796/lock_imagem_bt.png")
      .setColor("GOLD")
   message.channel.send(embed).then(async msgs => {
      msgs.react("🔓"); 
      const filtro = (reaction, userA) => reaction.emoji.name === '🔓' && userA.id === message.author.id
      const coletor = msgs.createReactionCollector(filtro);
      coletor.on('collect', coletado => {   
      message.channel.send(":unlock: | Canal destrancado!")   
      let idc = message.channel
      let geral = message.guild.roles.cache.find(x => x.name == '@everyone')
      idc.overwritePermissions([
          {
             id: geral,
             allow: ['SEND_MESSAGES'],
          }
        ])
      })
   })
   }
   exports.help = {
      name: 'lock',
      aliases: ['trancar', 'chat-off']
  }