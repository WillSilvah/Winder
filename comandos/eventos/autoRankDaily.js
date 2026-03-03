module.exports = {
    type: 'clientReady',
    code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$setInterval[
$clearMessages[$getGuildVar[rankedChat;1462224054676099094];6]
$sendMessage[$getGuildVar[rankedChat;1462224054676099094];
$disableAllMentions
$addContainer[
$addSection[
$addTextDisplay[## $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]]
$addThumbnail[$guildIcon[$guildID]]
]
$addSeparator[Large;true]
$addTextDisplay[
$memberLeaderboard[messageMonth;1462224054676099094;desc;11;1;\n;data;pos;$return[$env[pos]° <@$env[data;id]>
💬$env[data;value] | ✨️ $getMemberVar[pdaMonth;$env[data;id];$get[guildID]] | ⬆️ $getMemberVar[votesMonth;$env[data;id];$guildID]]]
]
;Green]
];1m;autoRankDaily]
 
`
}