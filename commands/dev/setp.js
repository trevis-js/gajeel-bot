const Discord = require("discord.js")
const db = require('quick.db');

exports.run = async (client, message, args) => {
    var nome = args[0]
    var link = args[1]
    var owner = message.mentions.users.first()
   var link2 = db.set(`link_`, link)
var dono = db.set(`dono_`, owner.username)
db.set(`sv_`, nome)
db.set(`mencao_`, owner)
    let embed = new Discord.MessageEmbed()
    .setTitle('<:g_partner:702829869792493618> Novo Parceiro <:g_partner:702829869792493618>')
    .setDescription(`Sua parceria já foi adicionada ao comando **g!partners**! Obrigado por ser um parceiro!\n\nInfo:\n\nNome do servidor: ${nome}\nLink de convite: ${link}\nDono do servidor: ${owner}`)
    .setFooter('Para receber suas vantangens contate o trevis!')
    owner.send(embed)
message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'setp',
    aliases: []
}