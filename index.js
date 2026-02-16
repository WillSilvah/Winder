const { ForgeClient } = require("@tryforge/forgescript")
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const client = new ForgeClient({
    intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent"
    ],
    events: [
        "messageCreate",
        "clientReady"
    ],
    prefixes: [
        "w+"
    ]
});

client.commands.load("./comandos/");
client.applicationCommands.load("./comandos");

client.login(process.env.TOKEN)