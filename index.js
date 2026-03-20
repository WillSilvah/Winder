const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { ForgeCron } = require("forgecron");

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const db = new ForgeDB({
    events: [
            "connect",
            "variableCreate",
            "variableDelete",
            "variableUpdate"
        ]
});

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
        "MessageContent",
        "AutoModerationExecution"
    ],
    extensions: [
        new ForgeDB({
            type: "sqlite" 
	 }),
		new ForgeCron()
	],
    events: [
        "autoModerationActionExecution",
        "autoModerationRuleCreate",
        "autoModerationRuleDelete",
        "autoModerationRuleUpdate",
        "channelCreate",
        "channelDelete",
        "channelPinsUpdate",
        "channelUpdate",
        "clientReady",
        "debug",
        "emojiCreate",
        "emojiDelete",
        "emojiUpdate",
        "entitlementCreate",
        "entitlementDelete",
        "entitlementUpdate",
        "error",
        "guildAuditLogEntryCreate",
        "guildAvailable",
        "guildBanAdd",
        "guildBanRemove",
        "guildCreate",
        "guildDelete",
        "guildIntegrationsUpdate",
        "guildMemberAdd",
        "guildMemberAvailable",
        "guildMemberRemove",
        "guildMemberUpdate",
        "guildScheduledEventCreate",
        "guildScheduledEventDelete",
        "guildScheduledEventUpdate",
        "guildScheduledEventUserAdd",
        "guildScheduledEventUserRemove",
        "guildSoundboardSoundCreate",
        "guildSoundboardSoundDelete",
        "guildSoundboardSoundUpdate",
        "guildUnavailable",
        "guildUpdate",
        "interactionCreate",
        "inviteCreate",
        "inviteDelete",
        "messageCreate",
        "messageDelete",
        "messageDeleteBulk",
        "messagePollVoteAdd",
        "messagePollVoteRemove",
        "messageReactionAdd",
        "messageReactionRemove",
        "messageReactionRemoveAll",
        "messageReactionRemoveEmoji",
        "messageUpdate",
        "presenceUpdate",
        "roleCreate",
        "roleDelete",
        "roleUpdate",
        "shardDisconnect",
        "shardError",
        "shardReady",
        "shardReconnecting",
        "shardResume",
        "stageInstanceCreate",
        "stageInstanceDelete",
        "stageInstanceUpdate",
        "stickerCreate",
        "stickerDelete",
        "stickerUpdate",
        "subscriptionCreate",
        "subscriptionDelete",
        "subscriptionUpdate",
        "threadCreate",
        "threadDelete",
        "threadMemberUpdate",
        "threadUpdate",
        "typingStart",
        "userUpdate",
        "voiceChannelEffectSend",
        "voiceStateUpdate",
        "webhooksUpdate"
    ],
    prefixes: [
        "w+", "w/", "<@$clientID> "
    ],
    prefixCaseInsensitive: true,
    trackers: {
        invites: true,
        voice: true
    }
});

client.functions.load('./comandos/custom/');
client.commands.load("./comandos/prefixCommands/");
client.commands.load("./comandos/eventos/");
client.applicationCommands.load("./comandos/slashCommands/");

client.login(process.env.TOKEN)
