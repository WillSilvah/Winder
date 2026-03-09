const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { ForgeCron } = require("forgecron");
const { YoutubeiExtractor } = require("discord-player-youtubei");
const { DefaultExtractors, ForgeMusic } = require("@tryforge/forge.music");

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const music = new ForgeMusic({
    events: [
            "audioFiltersUpdate",
            "audioTrackAdd",
            "audioTrackRemove",
            "audioTracksAdd",
            "biquadFiltersUpdate",
            "channelPopulate",
            "connection",
            "connectionDestroyed",
            "debug",
            "disconnect",
            "dspUpdate",
            "emptyChannel",
            "emptyQueue",
            "equalizerUpdate",
            "error",
            "playerError",
            "playerFinish",
            "playerPause",
            "playerResume",
            "playerSkip",
            "playerStart",
            "playerTrigger",
            "queueCreate",
            "queueDelete",
            "volumeChange"
        ],
      includeExtractors: DefaultExtractors
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
		new ForgeCron(),
        music
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
        "w+"
    ],
    prefixCaseInsensitive: true,
    trackers: {
        invites: true,
        voice: true
    }
});

music.player.extractors.register(YoutubeiExtractor, {});

client.functions.load('./comandos/custom/');
client.commands.load("./comandos/basic/");
client.commands.load("./comandos/eventos/");
music.commands.load("./comandos/music");
client.applicationCommands.load("./comandos/interactions/");

client.login(process.env.TOKEN)