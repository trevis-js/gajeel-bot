const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')
exports.run = async (client, message, args) => {

       if(!message.member.id === '414170295843160065') return message.reply("Você não tem permissão paraexecutar esse comando!");
        else {
            let member = message.mentions.members.first() || client.users.cache.get(args[0])
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                    message.channel.send("Você não pode mutar essa pessoa");
                    var muterole = db.get(`mute_${message.guild.id}`)
 
                    if (!muterole) {
                        try {
            await message.guild.roles.create(
                {data: {
name: "❄️ | Gajeel Mute | 🔇",
color: "#ff0000",
},
reason: 'Cargo de Mute | Gajeel Auditoria'
})


                              
                              message.reply(`não encontrei o cargo de mutado, por isso, criei o cargo: ❄️ | Gajeel Mute | 🔇`)

                        } catch (e) {
                            console.log(e.stack)
                        }
                    }
                    var tempo = args[1]
                    var motivo = args.slice(2).join(' ')
                    if(!motivo) motivo = "Nenhuma razão foi colocada"
                    const embed = new Discord.MessageEmbed()
                    .setTitle('**SILENCIAMENTO**')
                    .setDescription(`<:emoji_9:696065912251482182> Punido por:\n${message.author.tag}\n<:emoji_6:695993256055406613> Usuário:\n${member.user.tag}\n<:emoji_8:696065878126624799> ID do usuário:\n${member.id}\n<:emoji_21:696171465241919499> Motivo:\n${motivo}`)
                    .setFooter("Usuário punido com sucesso!")
                    .setTimestamp()
                    .setColor('RANDOM')
                    .setThumbnail(`${member.user.avatarURL()}`)
    

                    await (member.roles.add(muterole));
                    message.reply(embed)
                    setTimeout(function () {
                        member.roles.remove(muterole);
                        message.channel.send(`${member} não está mais mutado.`);
                    }, ms(tempo));
                    var canal = client.channels.cache.get('697123319199301693')
                    const Embed = new Discord.MessageEmbed()
                    .setTitle('**SILENCIAMENTO**')
                    .setDescription(`<:emoji_9:696065912251482182> Punido por:\n${message.author.tag}\n<:emoji_6:695993256055406613> Usuário:\n${member.user.tag}\n<:emoji_8:696065878126624799> ID do usuário:\n${member.id}\n<:emoji_21:696171465241919499> Motivo:\n${motivo}\nServidor:\n${message.guild}`)
                    .setFooter("Usuário punido com sucesso!")
                    .setTimestamp()
                    .setColor('RANDOM')
                    .setThumbnail(`${member.user.avatarURL()}`)
                    canal.send(Embed)
                }

                }
            }

            exports.help = { // setando o nome do arquivo, seguido do prefix
                name: 'mute',
                aliases: []
            }