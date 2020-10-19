const Discord = require('discord.js')
exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.members.first()

    let reason = args[0]
    const embed1 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Minhas permissões aqui no ${message.guild} não me permitem excluir mensagens!`)
    const embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem excluir mensagens!`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed).then(deletei => {
        setTimeout(() => {
            deletei.delete();
            }, 20000) 
            })
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1).then(deleteiu => {
        setTimeout(() => {
            deleteiu.delete();
            }, 20000) 
            })
    if (!reason) return message.channel.send("É necessário colocar um número de 1 a 100.")
    if(isNaN(reason)) return message.channel.send("É necessário colocar um número de 1 a 100.")
    if (reason < 1) return message.channel.send("Esse número é muito baixo.")
    if (reason > 100) return message.channel.send("Esse número é muito alto.")

     
    let messagem ="";
    let viagem ="";

    message.channel.messages.fetch({
        limit: reason,
    }).then((messages) => {
        if (!user) {
            messagem = messages.filter(m => m.author.id).array().slice(0, reason)
            viagem = messagem.filter(a => a.pinned === false)
        }
        message.channel.bulkDelete(viagem).catch(error => console.log(error.stack))

        let Embed = new Discord.MessageEmbed()
        .setDescription(`** <:lixo:711592299670405231> Mensagens apagadas: ${args[0]}**`)
        .setFooter(`Chat Limpo por: ${message.author.tag}`)
        .setColor("#ff8065")

        message.channel.send(Embed)
    })
}
exports.help = {
    name: "limpar",
    aliases: ['clear']
}