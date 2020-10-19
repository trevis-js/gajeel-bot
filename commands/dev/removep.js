const Discord = require("discord.js")
const db = require('quick.db');

exports.run = async (client, message, args) => {
    var nome = db.get(`sv_`, args[0])
    if(!nome) return message.reply('a parceria nunca existiu...')
    var owner = db.get(`mencao_`)
    let embed = new Discord.MessageEmbed()
.setTitle('Confirmação de remoção de parceria')
.setDescription(`Você tem certeza que deseja encerrar a parceria com ${nome}?`)
    message.channel.send(embed).then(s => {
      s.react('722028414118395945')
      s.react('718494836272922766')
      const SimFilter = (reaction, user, ) => reaction.emoji.id === '722028414118395945' && user.id === message.author.id;
      const NaoFilter = (reaction, user, ) => reaction.emoji.id === '718494836272922766' && user.id === message.author.id;
      // coletores de cada reação, para ver confirmar tal membro 
      const Sim = s.createReactionCollector(SimFilter);
      const Nao = s.createReactionCollector(NaoFilter);
      Sim.on('collect', r2 => {
        db.delete(`sv_`, args[0])
        db.delete(`link_`)
        db.delete(`dono_`)
        message.reply('parceria removida!')
      })
      Nao.on('collect', r2 => {
        s.delete()
})
    })
}
exports.help = {
    name: "removep",
    aliases: []
}