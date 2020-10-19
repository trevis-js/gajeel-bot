const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, args) => {
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
            message.reply("Você não tem a permissão de desmutar membros.");
        }
        else {
            let member = message.mentions.members.first() || client.users.cache.get(args[0])
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.cache.hasPermission('ADMINISTRATOR'))
                    message.channel.send("Você não pode desmutar essa pessoa!");
                else {
                    let mutedRole = db.get(`mute_${message.guild.id}`);
                    if(mutedRole) {
                        member.roles.remove(mutedRole);
                        message.channel.send(`${member.user.tag} foi desmutado por ${message.author}`);
                    }
                    else {
                        message.reply("Cargo não encontrado");
                    }
                }
            }
            else {
                message.reply("Membro não encontrado");
            }
        }
    }  
    exports.help = {
    name: "unmute",
    aliases: []
}