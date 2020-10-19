const db = require('quick.db');
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
       let member = message.mentions.users.first() || message.author;
            
       let timeout = 28800000
       var flocos = [
        5,
        10,
        15,
        20,
        25,
        30,
        35
       ]
       let premio = flocos[Math.floor(Math.random() * flocos.length)];
        let amount = Math.floor(Math.random() * 5000) + 500;

        let daily = await db.fetch(`daily_${message.author.id}`);
    
       if (daily !== null && timeout - (Date.now() - daily) > 0) {
         let time = ms(timeout - (Date.now() - daily));

         const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Parece que você já resgatou seu prêmio diário tente novamente em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``)

           message.channel.send(Embed)
       } else {
            let embed = new Discord.MessageEmbed()

            .setTitle(`<:IconGift:715326656205684889> DAILY`)
            .setDescription(`<a:aItemCoin:722037395733741651> Total de Cruzeiros recebidos hoje: **${amount}**\n<a:g_floco:738419862183084084> Total de Flocos recebidos hoje: **${premio}**`)
            .setColor('RANDOM')

            message.channel.send(embed)
    
        db.add(`reais_${message.author.id}`, amount)
        db.add(`flocos_${message.author.id}`, premio)
        db.set(`daily_${message.author.id}`, Date.now())
       
        }
    }

exports.help = {
    name: 'daily',
    aliases: ['diario']
}