const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
 var canal = client.channels.cache.get('689819894736486461')
  
  var sugestao = args.slice(1).join(' ');
  if (!sugestao) message.reply(`vc precisa escrever algo!`)
  
      let embed = new Discord.MessageEmbed()

        .setTitle(`SUGESTÃO`)
        .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n:inbox_tray: **Sugestão:** ${sugestao}`)
        .setColor('RANDOM')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
        
        canal.send(embed)
        .then(function (msg) {
          if(!sugestao) msg.delete()
            msg.react("👍");
            msg.react("👎"); 
              message.reply(`sua sugestão foi enviada ao desenvolvedor! :mailbox_with_no_mail:`)
        })
  

}


exports.help = {
 name: 'sugestao',
 aliases: ['sugerir']
}