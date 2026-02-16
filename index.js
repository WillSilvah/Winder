const { ForgeClient } = require("@tryforge/forgescript")
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

client.commands.load("./comandos/basic/");
client.applicationCommands.load("./comandos/slash/");

client.login(process.env.TOKEN)