const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
    var canal = client.channels.cache.get('697815466642767985')
    let invite = await message.channel.createInvite({temporary: false})
     var sugestao = args.slice(0).join(' ');
     if (!sugestao) return message.reply(`vc precisa escrever algo!`);

         let embed = new Discord.MessageEmbed()
           .setTitle(`**ERRO OU BUG**`)
           .setDescription(`<:emoji_6:695993256055406613> **Autor:** ${message.author}\n\n<:emoji_2:695993064258273350> **Erro/Bug:** ${sugestao}\n\n<:emoji_7:695993414675595284> **Servidor do report:** ${message.guild}\n\n<:emoji_26:696171741734633483> Invite do server: ${invite}`)
           .setColor('RANDOM')
           .setFooter(`Reaja aos emojis abaixo: Mostrando seu o erro foi resolvido ou o mesmo não existe`);
           message.reply(`seu bug/erro foi reportado ao desenvolvedor! Por favor aguarde uma resposta. :mailbox_with_no_mail:`)
            canal.send(`<@414170295843160065>`, embed).then(async msgs => {
              msgs.react("👍");
              msgs.react("👎"); 
              const filtro = (reaction, userA ) => reaction.emoji.name === '👍' && userA.id === '414170295843160065';
              const coletor = msgs.createReactionCollector(filtro);
              coletor.on('collect', coletado => {
                canal.send(`Adicione uma nota`).then(msg2 => {
                  let cl = canal.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                  .on('collect', c => {
                      desc = c.content
                let Embed = new Discord.MessageEmbed()
                .setTitle(`**Nota de Bug**`)
                .setDescription(`Seu reporte: ${sugestao}\n\nNota do desenvolvedor: ${desc}`)
                .setFooter(`Atenciosamente: Gajeel Developer`)
                message.author.send(Embed)
              })
              })
            }) 
                const filtro2 = (reaction, userA ) => reaction.emoji.name === '👎' && userA.id === '414170295843160065';
                const coletor2 = msgs.createReactionCollector(filtro2);
                var canal = client.channels.cache.get('697815466642767985')
                coletor2.on('collect', coletado => {
                  canal.send(`Adicione uma nota`).then(msg1 => {
                    let cl2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c2 => {
                        desc2 = c2.content
                  let Embed2 = new Discord.MessageEmbed()
                  .setTitle(`**Nota de Bug**`)
                  .setDescription(desc2)
                  .setFooter(`Atenciosamente: Equipe Chroma/T90`)
                  message.author.send(Embed2)
                })     
                  })
                })
            
           })       
          }

        
        exports.help = {
          name: 'contato',
          aliases: ['report', 'reporte', 'bug', 'erro']
      }