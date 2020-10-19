const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let igual = new Discord.MessageEmbed()
    .setTitle('<a:nop:718494836272922766> Algo de errado, não está certo.')
    .setDescription('OPS!\n\nParece que você escolheu um prefixo igual ao meu original, escolha outro.\n\nCaso queira resetar o prefixo digite: `<prefixo>setprefix reset`')
  //  const Embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem setar um novo prefixo!`)
  //  if (!['414170295843160065'].includes(message.author.id)){
  //     return message.channel.send(Embed);
   // }
  var newPrefix = args[0]
if(newPrefix === 'g!') return message.channel.send(igual)
if(args[0] === 'reset') newPrefix = 'g!'
  const embedError = new Discord.MessageEmbed()
  .setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription('Poxa, parece que você ultrapassou o limite de 6 caracteres.').setColor('#ff0000')

  if(newPrefix.length >= 6) return message.channel.send(embedError)

   db.set(`prefix_${message.guild.id}`, newPrefix)

  const embed = new Discord.MessageEmbed()
    .setDescription("**Novo prefixo!**")
    .addField("O prefixo foi alterado para:", '`' + newPrefix + '`')
    .setColor('#26ff01')

  message.channel.send(embed);
};
exports.help = {
  name: "setprefix",
  aliases: ['prefix', 'newprefixo']
}