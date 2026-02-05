const { AoiClient } = require("aoi.js");
const { AoiVoice, Manager, PlayerEvents, PluginName, Cacher, Filter } = require("aoi.music");
const { LoadCommands } = require("aoi.js");

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
	database: {
    type: "aoi.db",
    db: require("aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
    },
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

const voice = new AoiVoice(client, {
  searchOptions: {
    //soundcloudClientId: "Soundcloud ID", // optional
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});

const loader = new LoadCommands(client);
loader.load(voice.cmds, "./eventsmusic/");

voice.addEvent(PlayerEvents.QueueEnd);
voice.addEvent(PlayerEvents.TrackStart);

voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false
})),

voice.bindExecutor(client.functionManager.interpreter);

require("./handler/variables.js")(client);
require("./handler/status.js")(client);

client.loadCommands("./comandos/", false);

client.functionManager.createFunction({
    name: "$updateVersion",
    type: "aoi.js",
    code: `$writeFile[Recursos/version.json;$username[$clientID] $date.$formatDate[$dateStamp;MM];utf8]`
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