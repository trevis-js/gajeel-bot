const Discord = require('discord.js')
var Jimp = require("jimp")


exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()
  .setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription('É necessário colocar mais de um caractere para funcionar')
  let erro2 = new Discord.MessageEmbed()
  .setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription('Poxa, parece que você ultrapassou o limite de 50 caracteres.\n\n||Aqui vai um segredo: Esse limite não existe, porém passado de 50 caracteres a edição fica feia.||')
    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send(erro)
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send(erro2)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('<a:loadgajeel:719545323927896185> Carregando a mensagem...').then(message => {
                    message.edit('<a:loadgajeel:719545323927896185> Carregando a imagem...')
                    message.edit('<a:g_valido:722028414118395945> Pronto!')
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.reply('<a:nop:718494836272922766> OPS! Parece que a imagem não foi corretamente carregada.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send(`Eu não tenho a permissão necessária para fazer isso. \`ATTACH_FILES\``)
            }
        }
    }
}

exports.help = {
    name: "pp",
    aliases: ['firstword', 'primeiraspalavras']
}