const Discord = require(`discord.js`); // puxando a livraria `discord.js`
const db = require('quick.db')
exports.run = (client, message, args) => { // setando a base

  
    var p = db.get(`prefix_${message.guild.id}`)
    if(!p) p = 'g!'
    var site = (`[Site Oficial](https://gajeel.glitch.me)`)
    var site2 = (`[Site para doar](https://gajeel.glitch.me/doar.html)`)
    var vote = (`[Vote em mim!!!](https://botsparadiscord.com/bots/693261042402328576)`)

    let embed = new Discord.MessageEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription(`Olá, eu sou o ${client.user.username} sou um bot mais focado em moderação mas também tenho alguns comandos de diversão e utilidades.\n<a:setabranca:715292996186407022> ${site}\n<a:setabranca:715292996186407022> ${site2}\n<a:setabranca:715292996186407022> ${vote}\n\n<:info:715381427390251040> Mini Info:\n\n<a:rede:715214696696774696> Ping: ${parseInt(client.ws.ping)}\n <:usersall:709477224805302283> Membros: ${client.users.cache.size}\n\n<:pasta:710493916662595615> Pastas de Comandos:\n\n<a:1_1:711593760961724456> **Moderação** \n<a:2_2:711593787406811178> **Uteis** \n<a:3_3:711593815026172034> **Entretenimento**\n<a:4_4:711593848304042024> **Configuráveis**\n<a:5_5:711593901705920583> **Economia**`)
        .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
        .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
        .setAuthor(`Meu prefixo nesse servidor é: ${p}`)
        message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react(`715292817055940718`).then(r => { // inicio
            msg.react(`711593760961724456`).then(r => { // mod
            msg.react(`711593787406811178`).then(r => { // uteis
            msg.react(`711593815026172034`).then(r => { // entretenimento
                msg.react(`711593848304042024`).then(r => {
             msg.react(`711593901705920583`).then(r => {

             })
                msg.react(`711592299670405231`).then(r => {

                })
        })
      })
    })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.id === `711593787406811178` && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.id === `711593760961724456` && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.id === `711593815026172034` && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.id === `715292817055940718` && user.id === message.author.id;
        const ConfigFilter = (reaction, user, ) => reaction.emoji.id === `711593848304042024` && user.id === message.author.id;
        const EconomiaFilter = (reaction, user, ) => reaction.emoji.id === `711593901705920583` && user.id === message.author.id;
        const LimparFilter = (reaction, user, ) => reaction.emoji.id === `711592299670405231` && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Config = msg.createReactionCollector(ConfigFilter);
        const Economia = msg.createReactionCollector(EconomiaFilter);
        const Back = msg.createReactionCollector(BackFilter);
        const Limpar = msg.createReactionCollector(LimparFilter);
 
        Utilidades.on(`collect`, r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.MessageEmbed()
                .setTitle("<:emoji_16:715301285511037028> Utéis")
                .setDescription(`\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editável\`\`\``)
                .addField(` ${p}info `, `Uma pequena tabela sobre minhas informações`)
                .addField(` ${p}sugestao [sugestão]`, `Deixe uma sugestão para meu desenvolvedor`)
                .addField(` ${p}userinfo [@usuario]`, `Veja as informações de um membro`)
                .addField(` ${p}convite `, `Gera um convite permante do servidor`)
                .addField(` ${p}doar `, `Me ajude a ficar sempre online`)
                .addField(`${p}rankdiv`, `Mostra todos os convites do membros!`)
                .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
                .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
                .setColor("GOLD")
                r2.users.remove(message.author.id)
            msg.edit(embed);
        })
 
        Moderação.on(`collect`, r2 => {
            embed = new Discord.MessageEmbed()
            .setDescription(`\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editável\`\`\``)
                .setTitle("<:emoji_17:715307770357874719> Moderação")
                .addField(` ${p}ban [@usuario] (motivo)`, `Bane um membro de seu servidor`)
                .addField(` ${p}unban [ID do membro] (motivo)`, `Retira o banimento de um membro por meio do ID`)
                .addField(` ${p}limpar <número>`, `Limpe até 100 mensagens de um canal`)
                .addField(` ${p}kick [@usuario] (motivo)`, `Expulse membros fora da lei`)
                .addField(` ${p}msg [mensagem]`, `Escreva algo através do ${client.user.username}`)
                .addField(` ${p}lock `, `Tranque o canal para mensagem de membros`)
                .addField(` ${p}unlock `, `Destranque um canal que foi trancado!`)
                                .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
                .setColor("GOLD")
                .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
                r2.users.remove(message.author.id)
            msg.edit(embed);
        })
 
        Entretenimento.on(`collect`, r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("💳 Entretenimento")
                .setDescription(`\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editável\`\`\``)
                .addField(` ${p}avatar [@usuario]`, `Veja o avatar irado de algum membro!`)
                .addField(`${p}clima [cidade]`, `Veja como está o clima da sua e de outras cidades pelo mundo`)
                .addField(` ${p}calc [conta]`, `Faça contas suprainteligentes com o ${client.user.username}`)
                .addField(`${p}like [@usuario]`, `Dê um like em alguém no foguinho`)
                .addField(`${p}pp [mensagem]`, `O neném vai falar suas primeiras palavras!`)
                .addField(`${p}tapa [@usuario]`, `Dê um tapa em algum usuário`)
                .setColor("GOLD")
                .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
                .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
                r2.users.remove(message.author.id)
            msg.edit(embed);
        })
        Config.on(`collect`, r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle(`<:settings:710493279900270753> Configuráveis`)
        .setDescription(`\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editável\`\`\``)
        .addField(`${p}wlc`, `Abre o painel de bem vindo`)
        .addField(`${p}test-wlc`, `Testa enviando sua mensagem de bem vindo no canal designado.`)
        .addField(`${p}logs-staff [#canal/ID do canal]`, `Seta um canal para cair os logs de punições`)
        .addField(`${p}logs`, `Seta um canal para os logs do servidor`)
        .addField(`${p}dashboard`, `Mostar os módulos ativos no seu servidor`)
        .addField(`${p}setprefix [novo prefixo]/(reset)`, `Seta um novo prefixo para seu servidor, usando "${p}setpreifx reset" você irá resetar o preifxo.`)
        .addField(`<:g_tinder:731218404546969620> Foguinho:`, `Rede Social`)
        .addField(`${p}perfil [@usuario]`, `Mostar seu perfil no foguinho`)
        .addField(`${p}foto`, `Seta uma foto no seu perfil do foguinho`)
        .addField(`${p}backgorund`, `Seta uma imagem par o seu perfil no foguinho`)
        .addField(`${p}bio`, `Seta uma biografia para você no foguinho`)
        .addField(`Gifs:`, `Gifs para punições`)
        .addField(`${p}setgif [link]`, `Seta um gif para banimento`)
        .addField(`${p}mygif`, `Mostra seu gif de banimento`)
                        .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
                        .setColor("GOLD")
                        .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
                r2.users.remove(message.author.id)
                msg.edit(embed)
        })

        Economia.on(`collect`, r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`<:doador:711592658023350324> Economia`)
            .setDescription(`\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editável\`\`\``)
            .addField(`${p}daily`, `Pegue uma recompensa diária`)
            .addField(`${p}banco @usuario`, `Veja seu saldo total`)
            .addField(`${p}addmoney @usuario <quantia>`, `Adicione dinheiro a um membro`)
            .addField(`${p}enviar @usuario <quantia>`, `Transfira cruzeiros para algum usuário`)
            .addField(`${p}loja [número]`, `Compre algo nas lojas. \`Apenas a Loja 1 disponível\``)
            .addField(`${p}inv`, `Veja seus itens que você comprou na lojinha`)
            .addField(`${p}comer [comida] [quantidade]`, `Coma tudo o que quiser ou o que conseguir`)
                            .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
                            .setColor("GOLD")
                            .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
                    r2.users.remove(message.author.id)
                    msg.edit(embed)
        })

        Back.on(`collect`, r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`CENTRAL DE AJUDA!`)
            .setColor("GOLD")
            .setDescription(`Olá, eu sou o ${client.user.username} sou um bot mais focado em moderação mas também tenho alguns comandos de diversão e utilidades.\n<a:setabranca:715292996186407022> ${site}\n<a:setabranca:715292996186407022> ${site2}\n\n<:info:715381427390251040> Mini Info:\n\n<a:rede:715214696696774696> Ping: ${parseInt(client.ws.ping)}\n <:usersall:709477224805302283> Membros: ${client.users.cache.size}\n\n<:pasta:710493916662595615> Pastas de Comandos:\n\n<a:1_1:711593760961724456> **Moderação** \n<a:2_2:711593787406811178> **Uteis** \n<a:3_3:711593815026172034> **Entretenimento**\n<a:4_4:711593848304042024> **Configuráveis**\n<a:5_5:711593901705920583> **Economia**`)
            .setFooter(`CASO HAJA ALGUM BUG UTILIZE ${p}report + bug/erro`)
            .setImage(`https://cdn.discordapp.com/attachments/551181080082776073/715293199370813507/GajeelAjuda.png`)
            .setAuthor(`Meu prefixo nesse servidor é: ${p}`)
            r2.users.remove(message.author.id)
           msg.edit(embed);  
        });

        Limpar.on(`collect`, r2 => {
         embed = new Discord.MessageEmbed()
         .setTitle(`A mensagem de ajuda foi apagada`)
         msg.delete()
         message.channel.send(embed).then(msg1 => {
         setTimeout(() => {
            msg1.delete()
        }, 10000)
    })
        })
    });
     
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "help",
    aliases: [`ajuda`]
}