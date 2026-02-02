const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("aoi.music");

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


const manager = new Manager({
   devOptions: {
      debug: false, // Set to true for debugging purposes
   },
   searchOptions: {
      soundcloudClientId: "",
      youtubeAuth: false, // Options: TRUE or FALSE, default: TRUE
      youtubegl: "BR", // default: US
      youtubeClient: "WEB", // Options: "WEB" | "ANDROID" | "YTMUSIC_ANDROID" | "YTMUSIC" | "YTSTUDIO_ANDROID" | "TV_EMBEDDED", default: WEB
   },
   requestOptions: {
      offsetTimeout: 1500, // Timeout in milliseconds for searching and skipping, default: 500
      soundcloudLikeTrackLimit: 10, // Limit the number of liked tracks from SoundCloud, default: -1
      youtubePlaylistLimit: 20, // Limit the number of tracks in a YouTube playlist, default: -1
      spotifyPlaylistLimit: 30, // Limit the number of tracks in a Spotify playlist, default: -1
   },
});

const { LoadCommands } = require("aoi.js");

require("./handler/variables.js")(client);
require("./handler/status.js")(client);

client.loadCommands("./comandos/", false);

client.functionManager.createFunction({
    name: "$updateVersion",
    type: "aoi.js",
    code: `$writeFile[Recursos/version.json;$username[$clientID] $date.$formatDate[$dateStamp;MM;utf8]`
});

client.functionManager.createFunction({
    name: "$getVersion", 
    type: "aoi.js",
    code: `$readFile[Recursos/version.json]`
});