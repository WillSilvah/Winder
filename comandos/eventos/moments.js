module.exports = [{
    type: 'clientReady',
    code: `
$let[guildID;1462224054676099094]
$cron[

$jsonLoad[sessionold;$readFile[Recursos/session.json]]

$startTyping[$getGuildVar[batePapo;$get[guildID]]]
$sendMessage[$getGuildVar[batePapo;$get[guildID]];
$addSection[
$addTextDisplay[# $toUpperCase[Temporada $env[sessionold;number]: $env[sessionold;name]]
- **💬 $getGuildVar[guildMonthMessages;$get[guildID]] mensagens enviadas**
- **👋 $getGuildVar[membersJoinedMonth;$get[guildID]] membros conhecidos**
]
$addThumbnail[$guildIcon]
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
$deleteRecords[msgXP]

$deleteRecords[membersJoinedMonth]
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
$addThumbnail[$guildIcon]
]
$addSeparator[Large;true]
]

;0 0 1 * *;America/Recife]

$cron[
$deleteRecords[guildWeeklyMessage]
$deleteRecords[messageWeekly]
;0 0 * * 0]

$cron[
$deleteRecords[guildTodayMessage]
$deleteRecords[messageToday]
;0 0 * * *]
`
},{
    type: 'clientReady',
    code: `
    $let[guildID;1462224054676099094]
$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 🌞 BOM DIA PELUDOS!
**Vamos levantar e tomar uma xícara de café?**
];0 6 * * *;America/Recife]
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
];0 18 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;$get[guildID]];
# 😴 VAMOS DORMIR?
**Vamos tirar um cochilo?**
];0 22 * * *;America/Recife]
`
}]