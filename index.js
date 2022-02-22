//╭───────────────── ✦ 🌐 Dependencias

const {Bot, LoadCommands} = require('aoi.js');

const fs = require('fs');
//╭───────────────── ✦ 🤖 Bot Config

const bot = new Bot({
	token: 'ODYxMDQ4ODE1NTk0NTA0MjE0.YOEIMw.rT51BAIoA2hc7-cNUKyzuv5QBPg', 
	prefix: 'pw!',
	intents: 'all', 
	autoUpdates: true,
 database: {
            type: "default",
            path: "./db/",
            tables: ["pwh thalles"],
            promisify: false
        },
        respondOnEdit: {
            commands: true
},
        suppressAllErrors: false,
        errorMessage: ["", "{newEmbed:{title:Um erro desconhecido ocorreu!}{description:Esse comando não fucionou. O que é? Você acha que eu vou saber o problema? Se vira cara! Me deixa em paz.}]}"]
    })




//╭───────────────── ✦ 😎 Comandos On
bot.onReactionAdd()
bot.onReactionRemove()
bot.onLeave()
bot.onJoin()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onBanAdd()
bot.onTypingStart()
bot.onRateLimit()
bot.onChannelDelete()
bot.onChannelUpdate()
bot.onChannelCreate()
bot.onVoiceStateUpdate() 
bot.onRoleUpdate()
bot.onMemberUpdate()
bot.onRoleDelete()
bot.onRoleCreate()
bot.onBanRemove()
bot.onMessage()
bot.onMessageUpdate()
bot.onPresenceUpdate()
bot.onUserUpdate()
bot.onMessageDelete()
bot.onInteractionCreate()
bot.onGuildUpdate()
bot.onEmojiCreate()
bot.onEmojiUpdate()
bot.onEmojiDelete()
bot.onReactionRemoveAll()
bot.onReactionRemoveEmoji()
bot.onMessageDeleteBulk()
bot.onWebhookUpdate()
bot.onChannelPinsUpdate()
bot.onVariableCreate()
bot.onVariableUpdate()
bot.onVariableDelete()
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate()
bot.onApplicationCmdDelete()
bot.onStickerCreate()
bot.onStickerUpdate()
bot.onStickerDelete()
bot.onThreadCreate()
bot.onThreadUpdate()
bot.onThreadDelete()
bot.onThreadListSync()


//╭──────────────── ✦ 🔨 Pastas-Config

require('./handler/variables')(bot)
require('./handler/status')(bot)

//╭───────────────── ✦ 👊 ComdsConfig

const loader = new LoadCommands(bot) 

loader.load(bot.cmd,"./comandos/"); 

loader.setColors(loader.themes.default)  

//╭───────────────── ✦ 🐢 Eventos 

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});

//╭───────────────── ✦ 🌐 Hospedagem

require('./express.js').run;
 
  
bot.loopCommand({
code: `
$setServerVar[guess;$random[1;20]]
$author[1;Variável atualizada!]
$description[1;Váriavel do comando **guessthenumber** foi atualizada.]
`,
channel: "923998719765004299",
executeOnStartup: true,
every: 3600000
});

bot.loopCommand({
code: `
$author[1;Cache Members]
$description[1;Eu conheço **$membersCount[861313067291115541;all;no]** membros!]
`,
channel: "923998719765004299",
executeOnStartup: true,
every: 3600000
})
