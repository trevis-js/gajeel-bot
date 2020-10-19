const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem usar este comando!`)
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed);
let botmessage = args.join(" ");
message.delete().catch();
message.channel.send(botmessage);
}

exports.help = {
    name: "msg",
    aliases: ['say', 'falar']
}