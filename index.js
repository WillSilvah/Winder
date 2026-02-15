const { AoiClient } = require("aoi.js");
const { LoadCommands } = require("aoi.js");
const { Database } = require("aoijs.mysql");

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const fs = require('fs');

const client = new AoiClient({
	token: process.env.TOKEN,
	prefix: "w+",
    respondToBots: false,
	aoiLogs: "true",
	aoiWarning: "true",
    intents: ["Guilds", "GuildMembers", "GuildBans", "DirectMessages", "MessageContent", "GuildMessages","GuildVoiceStates"],
    events: ["onInteractionCreate", "onMessageDelete","onMessage", "onChannelCreate", "onThreadCreate", "onJoin", "onLeave", "onMemberUpdate", "onBanAdd"],
	//onInteractionCreate
	disableFunctions : ["$clientToken"],
	disableAoiDB: true,
    autoUpdates: false,
    mobilePlatform: false,
    guildOnly: true,
    respondOnEdit: {
    commands: true,
    time: 600000
},
    suppressAllErrors: false,
    errorMessage: ["", ""]
    });
    
new Database(client, {
    url: process.env.DATABASE_URL,
    tables: ['main'],
    keepAoiDB: "false",
    debug: "true"
});



require("./handler/variables.js")(client);
require("./handler/status.js")(client);

client.loadCommands("./comandos/", true);

client.functionManager.createFunction({
    name: "$updateVersion",
    type: "aoi.js",
    code: `$writeFile[Recursos/version.json;$username[$clientID] $formatDate[$dateStamp;D.M];utf8]`
});

client.functionManager.createFunction({
    name: "$getVersion", 
    type: "aoi.js",
    code: `$readFile[Recursos/version.json]`
});

client.functionManager.createFunction({
    name: "$linuxRam", 
    type: "aoi.js",
    code: `$exec[pm2 jlist | jq '.[] | select(.name=="winder-canary") | .monit.memory / 1024 / 1024 | floor' | tr -d '\\n']`
});

client.functionManager.createFunction({
    name: "$mediaPDA", 
    type: "aoi.js",
    code: `$get[temppda]$let[temppda;$truncate[$math[$get[temppdasoma]/$membersCount[$guildID;all;false]]]]$let[temppdasoma;$math[$replaceText[$replaceText[$userLeaderBoard[$guildID;msgXP;desc;{value},;$membersCount[$guildID;all;false];1;main];,;+];+
;+]0]]`
});

client.functionManager.createFunction({
    name: "$mediaMsgs", 
    type: "aoi.js",
    code: `$get[tempmsgs]$let[tempmsgs;$truncate[$math[$get[tempmsgssoma]/$membersCount[$guildID;all;false]]]]$let[tempmsgssoma;$math[$replaceText[$replaceText[$userLeaderBoard[$guildID;messageMonth;desc;{value},;$membersCount[$guildID;all;false];1;main];,;+];+
;+]0]]`
});

client.functionManager.createFunction({
    name: "$isCaps",
    type: "djs",
    code: `async (d) => {
        const data = d.util.aoiFunc(d);
        const [percentage, message] = data.inside.splits;

        const capsPercentage = (message.replace(/[^A-Z]/g, "").length / message.length) * 100;
        const isCaps = capsPercentage >= parseFloat(percentage);

        data.result = isCaps;
        return {
            code: d.util.setCode(data)
        };
    }
    `
});