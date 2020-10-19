const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Permissão inválida')
    let principal = new Discord.MessageEmbed()
    .setTitle('<:settings:710493279900270753> Configurações')
    .setDescription(`**Olá, ${message.author.username} bem vindo ao painel de configuração do servidor ${message.guild}.\nCom este painel você poderá configurar os sistemas de moderação de seu servidor**\n\n<a:1_1:711593760961724456> - Canal de logs staff: ${db.get(`punichannel_${message.guild.id}`)}\n<a:2_2:711593787406811178> - Canal de logs\n<a:3_3:711593815026172034> - Cargo de mute\n<a:4_4:711593848304042024> - Número total de MassBan`)
    .setFooter('Sistema de configurações do Gajeel')
    message.channel.send(principal).then(msg => {
        msg.react(`711593760961724456`).then(r => { // mod
            msg.react(`711593787406811178`).then(r => { // uteis
            msg.react(`711593815026172034`).then(r => { // entretenimento
                msg.react(`711593848304042024`).then(r => {
                    })
                })
            })
        })
        const LogsFilter = (reaction, user, ) => reaction.emoji.id === `711593787406811178` && user.id === message.author.id;
        const LogsSFilter = (reaction, user, ) => reaction.emoji.id === `711593760961724456` && user.id === message.author.id;
        const MuteFilter = (reaction, user, ) => reaction.emoji.id === `711593815026172034` && user.id === message.author.id;
        const MassFilter = (reaction, user, ) => reaction.emoji.id === `711593848304042024` && user.id === message.author.id;
        const Logs = msg.createReactionCollector(LogsFilter);
        const Logss = msg.createReactionCollector(LogsSFilter);
        const Mute = msg.createReactionCollector(MuteFilter);
        const Mass = msg.createReactionCollector(MassFilter);

        Logs.on('collect', r3 => {
            r3.users.remove(message.author.id)
            message.channel.send(`>>> Olá, ${message.author} mencione ou coloque o ID de um canal abaixo`).then(uso => {
                setTimeout(() => {
                    uso.delete()
                }, 20000);
            })
            let channels = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', r2 => {
                var lchannel = r2.mentions.channels.first()
                if(!lchannel) lchannel = r2.content
                var canal = db.set(`logs_${message.guild.id}`, lchannel.id)
                let funfou = new Discord.MessageEmbed()
                .setTitle('Modúlo Logs')
                .setDescription(`<a:aCheak:711593224061583380> | Canal de logs setado para: \`${lchannel.name}\``)
                .setFooter('Use g!dashboard para ver as configurações de seu servidor')
                .setColor('#26ff01')
                message.reply(funfou).then(feito => {
                    setTimeout(() => {
                        feito.delete()
                    }, 20000);
                })//then(feito)
            })//coletor canal de logs
        })//Logs
        Logss.on('collect', r3 => {
            r3.users.remove(message.author.id)
            message.channel.send(`>>> Olá, ${message.author} mencione ou coloque o ID de um canal abaixo`).then(uso => {
                setTimeout(() => {
                    uso.delete()
                }, 20000);
            })
            let channels = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', r2 => {
                var schannel = r2.mentions.channels.first()
                if(!schannel) schannel = r2.content
                var canal = db.set(`punichannel_${message.guild.id}`, schannel.id)
                let funfou = new Discord.MessageEmbed()
                .setTitle('Modúlo Logs')
                .setDescription(`<a:aCheak:711593224061583380> | Canal de logs staff setado para: \`${schannel.name}\``)
                .setFooter('Use g!dashboard para ver as configurações de seu servidor')
                .setColor('#26ff01')
                message.reply(funfou).then(feito => {
                    setTimeout(() => {
                        feito.delete()
                    }, 20000);
                })//then(feito)
            })//Messag Collector
        })//Logs Staff
        Mute.on('collect', r2 => {
            r2.users.remove(message.author.id)
            message.channel.send(`>>> Olá, ${message.author} mencione ou coloque o ID de um cargo abaixo`).then(uso => {
                setTimeout(() => {
                    uso.delete()
                }, 20000);
            })
            let roles = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', r1 => {
                var mrole = r1.mentions.roles.first()
                if(!mrole) mrole = r1.content
                var c = db.set(`mute_${message.guild.id}`, mrole.id)
                let funfou = new Discord.MessageEmbed()
                .setTitle('Mute Role')
                .setDescription(`<a:aCheak:711593224061583380> | Cargo de mute setado para: \`${mrole.name}\``)
                .setFooter('Use g!dashboard para ver as configurações de seu servidor')
                .setColor('#26ff01')
                message.reply(funfou).then(feito => {
                    setTimeout(() => {
                        feito.delete()
                    }, 20000);
                })//then(feito)
            })//Message Collector
          
      })//role
      Mass.on('collect', r2 => {
        r2.users.remove(message.author.id)
        message.channel.send(`>>> Olá, ${message.author} utilize apenas números`).then(uso => {
            setTimeout(() => {
                uso.delete()
            }, 20000);
        })
      let cl2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
      .on('collect', c2 => {
        var number = c2.content
        if(isNaN(number)) return message.channel.send('Por Favor insira um número'), msg.delete()
      var mensagem = db.set(`mass_${message.guild.id}`, number)

      let conclui = new Discord.MessageEmbed()
      .setTitle('Mensagem Bem Vindo')
      .setDescription(`<a:aCheak:711593224061583380> | Número máximo do MassBan alterado para: \`${number}\``)
      .setFooter('Use g!dashboard para ver as configurações de seu servidor')
      .setColor('#26ff01')
      message.reply(conclui).then(feito => {
          setTimeout(() => {
              feito.delete()
          }, 20000);
      })//then(feito)
    })//Message Collector
      })//Mass
        })//msg
    }
    exports.help = {
        name: 'config',
        aliases: ['configuração', 'serverconfig']
    }