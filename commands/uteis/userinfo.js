const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require("moment"); // puxando o NPM moment (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o local do moment, no nosso caso, pt-BR

// abrindo uma 'tabela' para os possiveis status do membro
const status = { 
    online: "<:emoji_12:696171148236292139> Disponivel", 
    idle: "<:emoji_33:698628345700548790> Ausente",       
    dnd: "<:emoji_32:698628313991872614> Ocupado", 
    offline: "<:emoji_11:696171113805381712> Offline" 
};
const badges = {
    DISCORD_EMPLOYEE: '',
  DISCORD_PARTNER: '',
  HYPESQUAD_EVENTS: '',
  BUGHUNTER_LEVEL_1: '',
  HOUSE_BRAVERY: '',
  HOUSE_BRILLIANCE: '',
  HOUSE_BALANCE: '',
  EARLY_SUPPORTER: '',
  TEAM_USER: '',
  SYSTEM: '',
  BUGHUNTER_LEVEL_2: "",
  VERIFIED_BOT: "",
  VERIFIED_DEVELOPER: ""
}
exports.run = (client, message, args) => { // setando a base

    var permissions = []; // deixamos vazio, pois no final do codigo, com toda nossa informacao, vai adicionar sozinho
    // puxando um membro mencionavel || nos argumentos zero || caso nao mencione ninguem, vai ser ele mesmo
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
   // um sistema de cores, para definir em randomico
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random()  * 16)).toString(16); }); 
    
   // agora, uma 'tabela' (sim, denovo kk), com todas as permissoes do Discord
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Expulsar membros");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Banir membros");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrador");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gerenciar mensagens");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gerenciar canais");
    }
  
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gerenciar apelidos");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gerenciar cargos");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gerenciar webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gerenciar emojis");
    }

    if(permissions.length == 0){ // caso esse membro n possua permissao alguma, vamos deixar a mensagem abaixo
        permissions.push("Nenhuma permissão detectada");
    }

    let embed = new Discord.MessageEmbed()
        .setTitle('<:perola:711592341311324242> Informações do usuário:')
        .setColor('#0000')
        .addField('<:ids:710494283550949409> Nome/Tag', `${member.user.tag}`, true)
        .addField('<:emoji_14:696171212140707871> Entrou aqui em',`\`${moment(member.joinedAt).format("LLL")}\``, true)
        .addField("<:emoji_19:696171403820531733> Conta criada em",`\`${moment(member.user.createdAt).format("LLL")}\``, true)
        .setThumbnail(`${member.user.avatarURL({dynamic : true})}`)

        message.channel.send(embed).then(msg => {
            msg.react(`🔙`).then(r => {

            })
            msg.react('🔜').then(r => {

            })
            const SoonFilter = (reaction, user, ) => reaction.emoji.name === '🔜' && user.id === message.author.id;
            const BackFilter = (reaction, user, ) => reaction.emoji.name === '🔙' && user.id === message.author.id;
            // coletores de cada reação, para ver confirmar tal membro 
            const Soon = msg.createReactionCollector(SoonFilter);
            const Back = msg.createReactionCollector(BackFilter);

            Soon.on('collect', r2 => {
                let soon = new Discord.MessageEmbed()
                .setTitle('<:perola:711592341311324242> Informações do usuário:')
                .addField("<:emoji_22:696171506513739787> Permissões", `${permissions.join(', ')}`)
                .addField("<a:IconStatus:715326553940164680> Status",`${status[member.user.presence.status]}`)
                .addField("<:IconID:711594416078585867> ID", `${member.id}`)
                .setThumbnail(`${member.user.avatarURL({dynamic : true})}`)
                .setColor('#0000')
                msg.edit(soon)
            })

            Back.on('collect', r2 => {
                let back = new Discord.MessageEmbed()
                .setTitle('<:perola:711592341311324242> Informações do usuário:')
                .setColor('#0000')
                .addField('<:ids:710494283550949409> Nome/Tag', `${member.user.tag}`, true)
                .addField('<:emoji_14:696171212140707871> Entrou aqui em',`\`${moment(member.joinedAt).format("LLL")}\``, true)
                .addField("<:emoji_19:696171403820531733> Conta criada em",`\`${moment(member.user.createdAt).format("LLL")}\``, true)
                .setThumbnail(`${member.user.avatarURL({dynamic : true})}`)
                msg.edit(back)
            })
        })
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'userinfo',
    aliases: ['ui']
}