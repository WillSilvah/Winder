module.exports = {
    type: 'clientReady',
    code: `
$jsonLoad[session;$readFile[Recursos/session.json]]
$let[guildID;$getGlobalVar[guildID]]

$setInterval[
$clearMessages[$getGuildVar[rankedChat;$get[guildID]];6]
$sendMessage[$getGuildVar[rankedChat;$get[guildID]];
$disableAllMentions
$addContainer[
$addSection[
$addTextDisplay[### $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]]
$addThumbnail[$guildIcon[$get[guildID]]]
$addTextDisplay[
$memberLeaderboard[messageMonth;$get[guildID];desc;50;1;\n;data;pos;$return[$env[pos]° **@$username[$env[data;id]]** 🔥$getMemberVar[talkingMonth;$env[data;id];$get[guildID];0]
> 💬 $separateNumber[$env[data;value];.] ✨️ $separateNumber[$getMemberVar[pdaMonth;$env[data;id];$get[guildID];0];.] ⬆️ $getMemberVar[votesMonth;$env[data;id];$get[guildID];0]]]
]
]
$addSeparator[Large;true]
$addTextDisplay[Ao todo, **$separateNumber[$getGuildVar[guildMonthMessages;$get[guildID];0];.]** mensagens foram enviadas por **$getMemberLeaderboardLength[messageMonth;$get[guildID]]** membros]
;Green]
];30m;autoRankDaily]
 
`
}
