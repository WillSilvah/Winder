const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const client = new ForgeClient({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "MessageContent"
    ],
    extensions: [
        new ForgeDB({
            type: "sqlite" 
	 })
	],
    events: ["clientReady", "interactionCreate", "messageCreate"],
    prefixes: [
        "w+"
    ],
    prefixCaseInsensitive: true,
    respondOnEdit: 60000,
    trackers: {
        invites: true,
        voice: true
    }
});

ForgeDB.variables({
  "versão": "Winder 3.7",
  "consoleChat": "1465218335389257802",
  "staffChat": "1462554187719114752",
  "allStaffRole": "1462546916821696612",
  "batePapo": "1462224055884189781",
  "anunciosChat": "1462224055884189779",
  "punishmentLog": "1462561551679623329",
  "rankedChat": "1466734269572579399",
  "guildID": "1462224054676099094",
  "lastMemberUpdateStatus": "",
  "lastMemberUpdateTime": "",
  "memberVerifiedRole": "1462797987041513574",
  "memberSupporterRole": "1463632725981532234",
  "memberVotedRole": "1463342375370887209",
  "allMemberRole": "1462544909390319960",
  "memberBoosterRole": "1463625995473911853",
  "lastWinMemberRole": "1465399687535398932",
  "memberArtistRole": "1463566238310596682",
  "guildIconDefault": "true",
  "memberOfficialArtistRole": "1466120026590417056",
  "memberActiveRole": "1467315513070977168",
  "logMemberActiveChat": "1467318550925410485",
  "prefixo": "w!",
  "pdaLoggerChannel": "1465378100505219072",
  "lastMemberGuild": "",
  "membersMeta": "0",
  "msgPerMinute": "0",
  "lastMessage": "",
  "lastMessageChannel": "",
  "lastMessageTime": "",
  "messageMonth": "0",
  "messageTotal": "0",
  "messageMeta": "1000",
  "guildMonthMessages": "0",
  "guildTotalMessages": "0",
  "guildMonthMessagesMeta": "0",
  "membersJoinedMonth": "0",
  "lastUserSendMessage": "",
  "votesTotal": "0",
  "votesMonth": "0",
  "remindDM": "true",
  "memberIsolated": "false",
  "memberIsolatedRole": "14716959190986302",
  
  "memberIsArtist": "false",
  "memberIsOfficialArtist": "false",
  "memberIsVerified": "false",
  "memberIsStaff": "false",
  
  "minigameStatus": "false",
  "minigameWord": "",
  "minigameLastUser": "",
  "minigameXPmax": "0",
  "minigameXPmin": "0",
  "minigameEmit": "false",
  "minigameType": "",
  "minigameTotalWins": "0",
  "minigameMonthWins": "0",
  
  "msgLast": "",
  "msgBoost": "1",
  "pdaMonth": "0",
  "pdaTotal": "0",
  "guildPDAmedia": "0",
  "metaPDATotal": "0",
  "metaPDA": "1000",
  
  "reminderStatus": "true",
  
  "warnsTotal": "0",
  "lastWarn": "",
  "afkStatus": "false",
  "afkReason": "",
  
  "birthday": "",
  "birthdayChannel": "1463315740403830936",
  "temp_lista": ""
})

client.commands.load("./comandos/basic/");
client.commands.load("./comandos/eventos/");
client.applicationCommands.load("./comandos/slash/");

client.login(process.env.TOKEN)