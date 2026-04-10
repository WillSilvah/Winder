module.exports = [{
    type: "clientReady",
    code: `
$let[guildID;1462224054676099094]

$cron[
$deleteRecords[guildWeeklyMessages]
$deleteRecords[messageWeekly]
$deleteRecords[tempMessageWeekly]
$deleteRecords[messageLogWeekly]
$sendMessage[$getGlobalVar[consoleChat];## VARIAVEIS WEEKLY RESETADA]
;0 0 * * 0;America/Recife;ResetWeekly]

$cron[
$deleteRecords[guildTodayMessages]
$deleteRecords[messageToday]
$deleteRecords[tempMessageToday]
$deleteRecords[messageLogToday]
$sendMessage[$getGlobalVar[consoleChat];## VARIAVEIS TODAY RESETADA]
;0 0 * * *;America/Recife;ResetToday]


$cron[
$let[guildID;1462224054676099094]
$setGuildVar[guildActivityMedia;$media[messageMonth;$getMemberLeaderboardLength[messageMonth;$get[guildID]]];$get[guildID]]

$jsonLoad[sessionold;$readFile[Recursos/session.json]]

$startTyping[$getGuildVar[batePapo;$get[guildID]]]
$sendMessage[$getGuildVar[batePapo;$get[guildID]];
$addSection[
$addTextDisplay[# $toUpperCase[Temporada $env[sessionold;number]: $env[sessionold;name]]
- **💬 $getGuildVar[guildMonthMessages;$get[guildID]] mensagens enviadas**
- **👋 $getGuildVar[membersJoinedMonth;$get[guildID]] membros conhecidos**
]
$addThumbnail[$guildIcon[$get[guildID]]]
]
$addSeparator[Large;true]
]

$startTyping[$getGuildVar[batePapo;$get[guildID]]]
$wait[5s]
$sendMessage[$getGuildVar[batePapo;$get[guildID]];
$addTextDisplay[# TOP 5 MEMBROS
$memberLeaderboard[messageMonth;$get[guildID];desc;5;1;
;data;pos;$return[$env[pos]° $bold[$username[$env[data;id]]]
💬$env[data;value] / ✨️ $getMemberVar[pdaMonth;$env[data;id];$get[guildID]] / ⬆️ $getMemberVar[votesMonth;$env[data;id];$get[guildID]]
]
]
]
$addSeparator[Large;true]
]

$deleteRecords[metaXP]
$deleteRecords[messageMonth]
$deleteRecords[votesMonth]
$deleteRecords[pdaMonth]
$deleteRecords[invitesMonth]
$deleteRecords[minigameMonthWins]

$deleteRecords[membersJoinedMonth]
$deleteRecords[membersLeftMonth]
$deleteRecords[guildMonthMessages]

$writeFile[Recursos/session.json;{
    "name": "$getGuildVar[sessionName;1462224054676099094]",
    "number": "$getGuildVar[sessionNumber;1462224054676099094]"
};utf8]

$startTyping[$getGuildVar[batePapo;$get[guildID]]]
$wait[5s]

$sendMessage[$getGuildVar[batePapo;$get[guildID]];$jsonLoad[session;$readFile[Recursos/session.json]]
$addSection[
$addTextDisplay[
AGORA COMEÇA...
# $toUpperCase[Temporada $env[session;number]: $env[session;name]]]
$addThumbnail[$guildIcon[$get[guildID]]]
]
$addSeparator[Large;true]
]

$deleteRecords[tempMessageMonth]
$deleteRecords[tempMessageWeekly]
$deleteRecords[tempMessageToday]
$deleteRecords[tempPdaMonth]
$deleteRecords[tempVotesMonth]
$deleteRecords[tempInvitesMonth]

$deleteRecords[messageLogMonth]

;0 0 1 * *;America/Recife;ResetMonth]
`
},{
    type: 'clientReady',
    code: `
    $let[guildID;1462224054676099094]
    $cron[
    $setGlobalVar[sleepMode;false]
    ;0 6 * * *;America/Recife]

$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 🌞 BOM DIA PELUDOS!
**Vamos levantar e tomar uma xícara de café?**
]
$setGlobalVar[sleepMode;false]
;34 6 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 🍱 JÁ PODE ALMOÇAR!
**Liberei o almoço, vão almoçar enquanto dá tempo!**
];38 11 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 🍱 FIM DO ALMOÇO
**Permissão para almoçar foi cancelada.**
];34 13 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 🌃 BOA NOITE
**Bora finalizar o dia com muitos cafunés e conversa boa! Quem vem? ✨**
];10 19 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 😴 VAMOS DORMIR?
**Vamos tirar um cochilo?**
]
$setGlobalVar[sleepMode;true]

;0 22 * * *;America/Recife]
`
},{
    type: "clientReady",
    code: `
    $let[guildID;1462224054676099094]
$cron[
$sendMessage[$getGuildVar[staffChat;$get[guildID]];
### 🚫 MENÇÕES A CARGOS DE PING DESATIVADAS!
]

$!editRole[$get[guildID];$getGuildVar[guildCallVoiceRole;$get[guildID]];;;;;false;]
$!editRole[$get[guildID];$getGuildVar[guildCallTalkRole;$get[guildID]];;;;;false;]
;0 22 * * *;America/Recife]

$cron[
$sendMessage[$getGuildVar[staffChat;$get[guildID]];
### ✅ MENÇÕES A CARGOS DE PING ATIVADAS!
]

$!editRole[$get[guildID];$getGuildVar[guildCallVoiceRole;$get[guildID]];;;;;true;]
$!editRole[$get[guildID];$getGuildVar[guildCallTalkRole;$get[guildID]];;;;;true;]
;0 6 * * *;America/Recife]   
    
`
}]