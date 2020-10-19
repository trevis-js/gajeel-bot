const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  const embed1 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem desbanir o usuário!`)
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(embed1).then(deletei => {
  setTimeout(() => {
      deletei.delete();
      }, 20000) 
      }) 
  let unbanned = args[0];



  let member = await client.users.fetch(unbanned)
  
  let ban = await message.guild.fetchBans()

  if (!ban.get(member.id)) {
    const embed = new Discord.MessageEmbed().setDescription(`Este usuário não foi banido!`)
    message.channel.send(embed);

    return;
  }

  if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
    const embed2 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Minhas permissões aqui no ${message.guild} não me deixam desbanir este usuário!`)
    message.channel.send(embed2);

    return;
  }

  if (!message.member.permissions.has('BAN_MEMBERS')) {
    let embed = new Discord.MessageEmbed()
      .setDescription(
        "Você não tem permissão para desbanir o usuário!"
      )
      .setColor("#2C2F33");
    message.channel.send(embed);

    return;
  }
  let user = ban.get(member.id)
  message.guild.members.unban(member);
  var motivo = args.slice(1).join(" ");
if(!motivo) motivo = 'Motivo não informado'
  let embed = new Discord.MessageEmbed()
    .setTitle(`**UNBAN**`)
    .setDescription(`️️️<:emoji_9:696065912251482182> **Staff:**\n${message.author.tag}\n<:emoji_6:695993256055406613> **Usuário:**\n${member.tag}\n<:IconID:711594416078585867> **ID do Usuário:**\n${member.id}\n\n<:emoji_21:696171465241919499> **Motivo:**\n${motivo}`)
    .setFooter(`O usuário foi desbanido com sucesso!`)
    .setThumbnail(`${member.avatarURL()}`)
    .setColor("#2C2F33");

  message.channel.send(embed)
  var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {
    const embed1 = new Discord.MessageEmbed()
    .setTitle('<:notify:710496410788823070> AVISO')
    .setDescription(`<:container:718962249498361889> Buscando em meus containers de dados vi que seu servidor(${message.guild}) não tem sistema de logs staff!\n\n<:add:710496707330441218> Para adicionar um canal utilize: **g!logs-staff <id do canal>**`)
    .setFooter('Para mais informações digite: g!dashboard')
    message.channel.send(`${message.author}`, embed1)
} else {
 canal.send(embed)
}
};

module.exports.help = {
  name: "unban",
  aliases: ['desbanir']
};