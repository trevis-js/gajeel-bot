const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const db = require('quick.db')
const fs = require('fs')

console.log(`${client.guilds.cache.size}`)
client.on("ready", () => {  
  console.log(`${client.user.username} foi iniciado\nMembros conectados: ${client.users.cache.size}\nServidores conectados: ${client.guilds.cache.size}\nCanais conectados: ${client.channels.cache.size}`)
  });

  var tabela = [ 
    {name: `em ${client.guilds.cache.size} servidores!`, type: 'PLAYING'}, 
    {name: 'Atualização todo final de semana!!!', type: 'LISTENING'},
    {name: `${client.users.cache.size} usuários`, type: 'WATCHING'},
    {name: 'Prefixo: g!', type: 'STREAMING', url: 'https://twitch.tv/trev1s_'},
    {name: 'Ajuda? g!help', type: 'STREAMING', url: 'https://twitch.tv/trev1s_'},
    {name: `Viu algum bug? Reporte agora usando g!report`, type: 'LISTENING'},
    {name: `https://gajeel.glitch.me`, type: 'PLAYING'},
    {name: `Me Adicione em seu servidor!!! #Gajeel1k`, type: 'WATCHING'}
  ];
  
  setInterval(function (){
    let status = tabela[Math.floor(Math.random() * tabela.length)];
    
  }, 5000) 

  client.on("guildMemberAdd", guildMember => {
    const reserva = client.channels.cache.get('726572860562210893')
    var role = guildMember.guild.roles.cache.get(db.get(`autoRole_${guildMember.guild.id}`));
    guildMember.roles.add(role).catch(e => {
      return;
    });
    if(!role) role = ''
    let mensagem = db.get(`mensagem_${guildMember.guild.id}`);
    if (!mensagem) mensagem = "{membro} Bem Vindo ao {server}"
    let a = mensagem.replace('{membro}', guildMember)
    if(!a) a = mensagem
    let b = a.replace('{server}', guildMember.guild.name)
    if(!b) b = mensagem
    var channel = guildMember.guild.channels.cache.get(
      db.get(`autoChannel_${guildMember.guild.id}`)
    );
    if(channel === reserva)
    if(!channel) channel = reserva
    channel.send(b)
  })
  client.on('guildCreate', guild => {
    const embed = new Discord.MessageEmbed()
      .setTitle('<:emoji_14:696171212140707871> Entrada')
      .setDescription(`**Informações**\n\nServidor: ${guild.name}\n?? » Membros: ${guild.memberCount}\nID da Guild: ${guild.id}\n?? » Proprietário: ${guild.owner.user.tag}\n??? » Região: ${guild.region}`)
    canal.send(embed)
  })
  client.on('guildCreate', () => {
    const channel = client.channels.cache.get('702508475561017385')
    channel.setName(`??· Servidores: ${client.guilds.cache.size}`)
  })
  client.on('guildDelete', () => {
    const channel = client.channels.cache.get('702508475561017385')
    channel.setName(`??· Servidores: ${client.guilds.cache.size}`)
  })
  client.on('guildDelete', guild => {
    const canal = client.channels.cache.get('712777908124385523')
    const embed = new Discord.MessageEmbed()
      .setTitle('<:emoji_13:696171184492118147> Saída')
      .setDescription(`**Informações**\n\nServidor: ${guild.name}\n?? » Membros: ${guild.memberCount}\n?? » Proprietário: ${guild.owner.user.tag}\n??? » Região: ${guild.region}`)
    canal.send(embed)
  })
  client.on("ready", () => {
  
  setInterval(() => {
    client.channels.cache.get('702508596688191561').setName(`??·Usuários: ${client.users.cache.size}`)
  }, 3600000);
  
    setInterval(async () => {
  
      const ping = parseInt(client.ws.ping) + " ms";
      await client.channels.cache.get("719896905273835540").setName(`??·Ping: ${ping}`)
  
    }, 30000);
  })
  client.on('messageDelete', del => {
    if(del.author.bot) return;
    const reserva = client.channels.cache.get('726572860562210893')
    var channel = del.guild.channels.cache.get(
      db.get(`logs_${del.guild.id}`)
    );
    if(!channel) channel = reserva
    const logsm = new Discord.MessageEmbed()
    .setTitle('<:messagedeleted:711593352751087706> Mensagem deletada')
    .setDescription(`**Autor:** \`${del.author.tag}\`\n**Canal:** ${del.channel}\n**Mensagem:**\n\`\`\`${del}\`\`\``)
    .setFooter('Sistema de logs do Gajeel')
    .setTimestamp()
    .setColor('RED')
    .setThumbnail(del.author.avatarURL({dynamic: true}))

  })
  client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content === newMessage.content) return;
    const reserva = client.channels.cache.get('726572860562210893')
    var channel = oldMessage.guild.channels.cache.get(
      db.get(`logs_${oldMessage.guild.id}`)
    );
    if(channel === reserva)
    if(!channel) channel = reserva
    const logsm = new Discord.MessageEmbed()
    .setTitle('<:messageedited:711593383373701191> Mensagem editada')
    .setDescription(`**Autor:** \`${oldMessage.author.tag}\`\n**Canal:** ${oldMessage.channel}\n**Mensagem Original:**\n\`\`\`${oldMessage.content}\`\`\`**Mensagem Editada:**\n\`\`\`${newMessage.content}\`\`\``)
    .setFooter('Sistema de logs do Gajeel')
    .setTimestamp()
    .setThumbnail(oldMessage.author.avatarURL())
    .setColor('YELLOW')
  
  })
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands", async (err, files) => {
  if (err) console.error(err); 
  let arquivojs = files.filter(file => !file.endsWith('.js'))
    arquivojs.forEach((f, i) => {
        fs.readdir(`./commands/${f}`, async (erro, file) => {     
          for(let b = 0; b < file.length;b++){
          let props = require(`./commands/${f}/${file[b]}`);
          console.log(`\x1b[32m PASTA: ${f.toUpperCase()} | COMANDO: ${file[b]} | STATUS: CARREGADO!`)
          if(!props.help.name) return console.log(`\x1b[31m[ERRO]  Está faltando o Nome do Comando! no comando ${file[b]} ] \x1b[0m`)
          else if(!props.help.aliases) console.log(`\x1b[31m[ERRO]  Está faltando o Aliases do Comando! no comando ${file[b]} ] \x1b[0m`)
          client.commands.set(props.help.name,props);
          if(props.help.aliases){
          props.help.aliases.forEach(alias => {
          if(alias) return client.aliases.set(alias, props.help.name);
          });    
        }
        }
      })
  })
})
const voto = new Discord.WebhookClient('737356811585323110', 'spa7eUUgtrNs2KsDdzEl1qiwiLpGF39KMOl6T4lyhzspoCsau08DyGQEIHARDaUSNST-'),

// configuração (Já está com o necessário)
 bot_id = "550305758583980042", // BOT = Bots Para Discord
 channel_id = "537433191393525760" // Canal site_logs

client.on("message", async message => {

    // configuração (Já está com o necessário)
    const bot_id = "550305758583980042",//"550305758583980042" // BOT = Bots Para Discord
     channel_id = "537433191393525760" //"537433191393525760" // Canal site_logs

    try {
      // Verifica se a mensssagem enviada é no canal especificado acima, e reparte toda a menssagem (caso seja)
      if (message.author.id === bot_id && message.channel.id === channel_id) {
        let separador = message.content.split(' '),
          parte_1 = message.content.substr(message.content.indexOf("#")),
          parte_2 = parte_1.substr(7),
          parte_3 = parte_2.substr(parte_2.indexOf(")", "."))
        parte_2.replace(parte_3, "")

        let bot_name_1 = parte_3.replace(") votou no bot **`", ''),
          bot_name_2 = bot_name_1.replace("`**.", ''),
          bot_name_3 = bot_name_2.replace(`https://botsparadiscord.com/bots/${client.user.id}`, ''),
          bot_name_4 = bot_name_3.replace("<>", ''),
          bot_name_final = bot_name_4.replace(/(\r\n|\n|\r)/gm, "")

        // Aqui verifica se a menssagem repartida tem a tag do seu bot
        if (bot_name_final === client.user.tag) { // Defina a tag do seu bot ex: 'ZabbiX#7853' ou 'bot.user.tag' || 'client.user.tag'

        // Pra pegar o ID do usuário
          let sep = separador[2],
           sep1 = sep.replace("(", ''),
           userID = sep1.replace(")", '')
       var valor = [
         500,
         750,
         900,
         1000,
         1500,
         1750,
         2000,
       ]
       var rflocos = [
         10,
         25,
         30,
         45,
         50,
       ]
           let premio = valor[Math.floor(Math.random() * valor.length)];
           let premiof = rflocos[Math.floor(Math.random() * rflocos.length)];
db.add(`reais_${userID}`, premio)
db.add(`flocos_${userID}`, premiof)
          
          let userDiscord = await client.users.fetch(userID) // Pesquise o usuário pelo ID, e envie uma mensagem informando que ganhou algo, ou agradeça pelo voto
          userDiscord.send(`**OBRIGADO PELO VOTO!**\n\nValeu por votar em mim, aqui está sua recompensa: ${premio} cruzeiros!\nContinue votando para mais prêmios.`) // Pode modificar e enviar uma embed
         
         // Configurção e Envio do WebHook //
          voto.send(`:partying_face: \`` + separador[1] + `\` votou no ${client.user.tag}! E ganhou ${premio}!!!\n>>> Vote também para ganhar prêmios incrivéis!\nVote pelo link: https://botsparadiscord.com/bots/${client.user.id}/votar`, { // Recebeu 1 dia de \`VIP\`! :sunglasses:
            username: client.user.username, //Definição do nome do WebHook
            avatarURL: client.user.displayAvatarURL // Definição da imagem do WebHook
          }) 
        }
      }
    } catch (e) {
      console.log('Algo aconteceu :/\n' + e)
    }
    var contagem = db.add(`cmd_${message.guild.id}`, 1)
    if(contagem === 10) db.delete(`cmd_${message.guild.id}`), db.add(`gm_${message.guild.id}`, 5)
var prefix = db.get(`prefix_${message.guild.id}`)
if(!prefix) prefix = config.prefixo;
if (message.author.bot) return;
if (message.channel.type === "dm") return;
if (!message.content.toLowerCase().startsWith(prefix)) return;
message.delete()

    var bl = db.get(`blacklist_${message.author.id}`)
   let args = message.content.slice(prefix.length).trim().split(' ')
   let cmd = args.shift().toLowerCase()
   let command;
if([bl].includes(message.author.id)) {
return message.channel.send(`${message.author}, você está na minha blacklist, por isso você não poderá executar meu comandos.`)
}
if(client.commands.has(cmd)) {
command = client.commands.get(cmd)
} else {
command = client.commands.get(client.aliases.get(cmd))
}
if (command) command.run(client, message, args)})
client.login(config.token)