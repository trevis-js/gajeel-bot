const db = require('quick.db');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
        let mebed = new Discord.MessageEmbed()
    .setTitle('<a:nop:718494836272922766> OPS!')
    .setDescription('Parece que este comando está offline ;-;. Tente novamente amanhã!')
    .setFooter('Atenciosamente: Gajeel Developer')
      if (!['414170295843160065', '693261042402328576'].includes(message.author.id)) 
      return message.channel.send(mebed).then(msg => {
        setTimeout(() => {
          msg.delete()
        }, 15000);
    })
const useer = message.author
    const reais = db.get(`reais_${useer.id}`)
    if (!reais) reais === '0'
  
    let embed = new Discord.MessageEmbed()
    .setTitle('🏦 Banco')
    .setDescription(`<a:g_money:722028377829277707> Saldo Atual: **${reais} cruzeiros**\n\nReaja com <a:setabranca:715292996186407022> para ir ao caixa eletrônico`)
    .setColor('#ffff99')
    .setFooter(`Proprietário da conta: ${useer.tag}`)

    message.channel.send(embed).then(msg => {
 msg.react('715292996186407022').then(r => {

 })
 setTimeout(() => {
     msg.delete()
 }, 300000);
 const UmFilter = (reaction, user, ) => reaction.emoji.id === '715292996186407022' && user.id === useer.id;
 const Um = msg.createReactionCollector(UmFilter);
 Um.on('collect', r2 => {
     msg.reactions.removeAll()
     let embed = new Discord.MessageEmbed()
     .setTitle('<a:cc:711942045106831399> Caixa Eletrônico')
     .setDescription(`<a:1_1:711593760961724456> - Transferência\n<a:2_2:711593787406811178> - Em breve...\n<a:3_3:711593815026172034> - Em breve...`)
     msg.edit(embed)
     msg.react('711593760961724456').then(r => {

     })
     const AFilter = (reaction, user, ) => reaction.emoji.id === '711593760961724456' && user.id === message.author.id;
     const A = msg.createReactionCollector(AFilter);
     A.on('collect', r2 => {
 msg.delete()
 message.reply('erro!')
                    })
                })
            })
        }
exports.help = {
    name: 'banco',
    aliases: ['bank']
}