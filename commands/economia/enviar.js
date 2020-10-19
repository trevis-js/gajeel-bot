const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args, config) => {
    const member = message.mentions.users.first() 

    const money = db.get(`reais_${message.author.id}`)
    const erro = new Discord.MessageEmbed().setTitle("<:notlike:721072729813680149> OPS!").setDescription(`<a:nop:718494836272922766> **Comando utilizado de forma incorreta!**\nVocê utilizou o comando dessa forma: ${message.content}\n\n<a:g_valido:722028414118395945> **Forma correta:**\n\`g!enviar @usuario <quantia>\``)

    if (!member) {
        return message.reply('por favor mencione um membro!')
    }
  
    if (member === message.author) {
        return message.reply(`não tem como você enviar dinheiro da sua conta pra você mesmo!`)
    }
    if(member.bot) {
    let Embed1 = new Discord.MessageEmbed()
    .setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.")
    .setDescription(`Você não pode transferir **${args[1]}** cruzeiros para ${member.username} pois ele é um bot!`)
return message.channel.send(`${message.author}`, Embed1)
    }
  
    if (!args[1]) {
        return message.channel.send(`${message.author}`, erro)
    }
  
    if (!args[0]) {

        return message.channel.send(`${message.author}`, erro)
    }

    if (args[1] < 1) {
        const embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`É preciso colocar um valor maior que **1 cruzeiro** para transferir!`)
      return message.channel.send(`${message.author}`, embed)
    }

    if (message.content.includes('-')) { 
        const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Você está tentando abusar desse comando???\n**Que coisa feia, vou contar pra sua mãe!**:rage:`)
        return message.channel.send(`${message.author}`, Embed)
    }
  
   if (isNaN(args[1])) {
     return message.channel.send(`lll`)
   }

    if (money < args[1]) {
        const embed1 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Parece que você tem um saldo inferior ao que você quer transferir!\n**Saldo Atual: ${money}**`)
        return message.channel.send(`${message.author}`, embed1).then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 15000)
        })
    }
let embed = new Discord.MessageEmbed()
.setTitle('Confirmação de tranferência')
.setDescription(`Olá, Senhor/Senhora **${message.author.username}** você tem certeza de que quer transferir **${args[1]}** para ${member}?`)
.setFooter('As tranferências pelo Gajeel Bank são irreversiveis') 
    message.channel.send(embed).then(s => {
      s.react('722028414118395945')
      s.react('718494836272922766')
      const SimFilter = (reaction, user, ) => reaction.emoji.id === '722028414118395945' && user.id === message.author.id;
      const NaoFilter = (reaction, user, ) => reaction.emoji.id === '718494836272922766' && user.id === message.author.id;
      // coletores de cada reação, para ver confirmar tal membro 
      const Sim = s.createReactionCollector(SimFilter);
      const Nao = s.createReactionCollector(NaoFilter);
        Sim.on("collect", c => {
            c.remove(message.author.id);
          
          message.channel.send(`Pagamento feito!`)
          s.delete()
         db.add(`reais_${member.id}`, args[1])
         db.subtract(`reais_${message.author.id}`, args[1])
           })
                      Nao.on('collect', r2 => {
               s.delete()
     })
    })
    }
    exports.help = {
    name: 'enviar',
    aliases: ['send', 'transferir']
}