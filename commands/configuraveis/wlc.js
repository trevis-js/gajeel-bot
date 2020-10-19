const db = require('quick.db');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let ajuda = new Discord.MessageEmbed()
    .setTitle(`⁉️ Ajuda (${message})`)
    .setDescription(`ℹ️ Info:\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editavel\`\`\`\n🔎 Como utilizar?`)
    .addField(`🔖 Comando:`, `g!wlc`, true)
    .addField(`📋 Descrição:`, `Abre o painel para setar os modúlos de bem vindo`)
    .addField(`🗂️ Categoria:`, `Configuráveis`)
    .addField(`⚙️ Configurável:`, `Sim`)
    .setFooter('Para mais ajuda utilize: g!help')
    if(args[0] === 'help') return message.channel.send(ajuda).then(a => {
        a.react(`🤔`).then(r => {

        })
        const DFilter = (reaction, user, ) => reaction.emoji.name === '🤔' && user.id === message.author.id;
        const D = a.createReactionCollector(DFilter)

        D.on('collect', r2 => {
            const embed1 = new Discord.MessageEmbed()
    .setTitle(`**Demonstração comando welcome**`)
    .setDescription(`**Este comando não tem demonstração**`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp()
    a.edit(embed1)
        })
    })
    const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem acessar o painel de bem vindo`)
    
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(Embed)
     
   const embed = new Discord.MessageEmbed()
   .setTitle('Módulo Bem-Vindo')
   .setDescription(`Reaja com os emojis abaixo para configurar o módulo de bem vindo aqui no ${message.guild}.\n\n<a:1_1:711593760961724456> - Mensagem\n<a:2_2:711593787406811178> - AutoRole\n<a:3_3:711593815026172034> - \`Em desenvolvimento\`\n<:emoji_20:696171434510385152> - Canal`)
   .addField(`**OBS:**`, `__O Gajeel por hora não tem sistema de on/off nesse modúlo!__`)
   .setFooter('Para mais informações digite: g!dashboard')
   .setColor('#2f3136')
      message.channel.send(embed).then(msg => {
          setTimeout(() => {
              msg.delete()
          }, 120000);
          msg.react('711593760961724456').then(r => {

          })
          msg.react('711593787406811178').then(r => {

          })
          msg.react('711593815026172034').then(r => {

          })
          msg.react('696171434510385152').then(r => {

          })
          const MsgFilter = (reaction, user, ) => reaction.emoji.id === '711593760961724456' && user.id === message.author.id;
          const RoleFilter = (reaction, user, ) => reaction.emoji.id === '711593787406811178' && user.id === message.author.id;
          const ChannelFilter = (reaction, user, ) => reaction.emoji.id === '696171434510385152' && user.id === message.author.id;
          const LimparFilter = (reaction, user, ) => reaction.emoji.id === '711593815026172034' && user.id === message.author.id;
          // coletores de cada reação, para ver confirmar tal membro 
          const M = msg.createReactionCollector(MsgFilter);
          const R = msg.createReactionCollector(RoleFilter);
          const C = msg.createReactionCollector(ChannelFilter);
          const L = msg.createReactionCollector(LimparFilter);

          M.on('collect', r2 => {
            r2.users.remove(message.author.id)
              message.channel.send(`>>> Olá, ${message.author} na mensagem de bem vindo você pode usar duas propriedades são elas\n\n{membro} - Para escolher onde ficará a menção do usuário\n{server} - Para escolher onde ficará o nome do servidor`).then(uso => {
                  setTimeout(() => {
                      uso.delete()
                  }, 20000);
              })
            let cl2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', c2 => {
              var wmensagem = c2.content
            var mensagem = db.set(`mensagem_${message.guild.id}`, wmensagem)
            if (!mensagem) mensagem = "{member} bem vindo ao {server}"
            let conclui = new Discord.MessageEmbed()
            .setTitle('Mensagem Bem Vindo')
            .setDescription(`<a:aCheak:711593224061583380> | Mesagem de Bem-Vindo setada para: \`${wmensagem}\``)
            .setFooter('Use g!dashboard para ver as configurações de seu servidor')
            .setColor('#26ff01')
            message.reply(conclui).then(feito => {
                setTimeout(() => {
                    feito.delete()
                }, 20000);
            })
          })
        })
          R.on('collect', r2 => {
            r2.users.remove(message.author.id)
            message.channel.send(`>>> Olá, ${message.author} mencione ou coloque o ID de um cargo abaixo`).then(uso => {
                setTimeout(() => {
                    uso.delete()
                }, 20000);
            })
            let roles = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', r1 => {
                var wrole = r1.mentions.roles.first()
                if(!wrole) wrole = r1.content
                var c = db.set(`autoRole_${message.guild.id}`, wrole.id)
                let funfou = new Discord.MessageEmbed()
                .setTitle('AutoRole')
                .setDescription(`<a:aCheak:711593224061583380> | Cargo automático setado para: \`${wrole.name}\``)
                .setFooter('Use g!dashboard para ver as configurações de seu servidor')
                .setColor('#26ff01')
                message.reply(funfou).then(feito => {
                    setTimeout(() => {
                        feito.delete()
                    }, 20000);
                })
            })
          
      })//role

      C.on('collect', r3 => {
        r3.users.remove(message.author.id)
        message.channel.send(`>>> Olá, ${message.author} mencione ou coloque o ID de um canal abaixo`).then(uso => {
            setTimeout(() => {
                uso.delete()
            }, 20000);
        })
        let channels = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', r2 => {
            var wchannel = r2.mentions.channels.first()
            if(!wchannel) wchannel = r2.content
            var canal = db.set(`autoChannel_${message.guild.id}`, wchannel.id)
            let funfou = new Discord.MessageEmbed()
            .setTitle('Canal de Bem Vindo')
            .setDescription(`<a:aCheak:711593224061583380> | Canal de bem vindo setado para: \`${wchannel.name}\``)
            .setFooter('Use g!dashboard para ver as configurações de seu servidor')
            .setColor('#26ff01')
            message.reply(funfou).then(feito => {
                setTimeout(() => {
                    feito.delete()
                }, 20000);
            })
        })
      })
     
})
}
exports.help = {
    name: 'wlc',
    aliases: ['welcome', 'bemvindo', 'config-wlc']
}