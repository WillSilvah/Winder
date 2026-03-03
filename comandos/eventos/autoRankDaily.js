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
$memberLeaderboard[messageMonth;$get[guildID];desc;11;1;\n;data;pos;$return[$env[pos]° <@$env[data;id]>
💬$env[data;value] | ✨️ $getMemberVar[pdaMonth;$env[data;id];$get[guildID];0] | ⬆️ $getMemberVar[votesMonth;$env[data;id];$get[guildID];0]]]
]
]
;Green]
];30m;autoRankDaily]
 
`
}
