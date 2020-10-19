const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const db = require('quick.db')
exports.run = async (client, message, args) => { // setando as bases
    const embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem expulsar este usuário!`)
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(embed).then(deletei => {
        setTimeout(() => {
            deletei.delete();
            }, 20000) 
            })  // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro

    let member = message.mentions.members.first() || client.users.cache.get(args[0])
    if (!member) return message.reply("selecione um usuário válido!") // caso o autor esqueça de mencionar um membro, vamos dar o erro
    if (!member.bannable) return message.reply("o usuário possui um cargo acima do meu!") // caso o membro tenha um cargo acima do seu bot, ele não vai expulsar
    let motivo = args.slice(1).join(' ') // puxando um motivo
    if (!motivo) motivo = "Nenhuma razão fornecida" // caso nao haja, daremos com tal mensagem
    await member.kick(`Expulsão(${motivo}) | Gajeel Auditoria`) // finalizando com o kick 
      .catch(error => message.reply(`${message.author}, não foi possível completar esta punição devido ao erro: ${error}`)) // caso ocorra um erro no final, vamos filtrar e avisar qual foi

      const anal = client.channels.cache.get('695651028175028224')
      const Embed = new Discord.MessageEmbed()
      .setTitle(`**Expulsão**`)
      .setDescription(`️️️<:emoji_9:696065912251482182>**Expulso por:**\n${message.author.tag}\n<:emoji_6:695993256055406613>**Usuário:**\n${member.user.tag}\n**ID do Usuário:**\n${member.id}\n<:emoji_8:696065878126624799>**Motivo:**\n${motivo}`)
      .setFooter(`Usuário Punido com sucesso!`)
      .setTimestamp()
      .setThumbnail(`${member.user.avatarURL()}`)
      .setColor("#ff8065")
      message.channel.send(Embed)

      var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {
message.channel.send(`${message.author} **Parece que você ainda não possui um canal de logs staff. Para setar use: g!logs-staff #canal**`)
} else {
 canal.send(Embed)
}
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'kick',
    aliases: ['expulsar', 'vaza']
}