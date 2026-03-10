module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]
$addContainer[
$addSection[
$addTextDisplay[## $toUpperCase[$guildName]
**👤 $separateNumber[$guildMemberCount[1462224054676099094;;false];.] | 🟢 $separateNumber[$guildMemberCount[1462224054676099094;online;false];.] | 🚀 $guildBoostCount[$guildID]**
]
$addThumbnail[$guildIcon]
]
$addSeparator[Large;true]
$addTextDisplay[
### $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]
💬 **$separateNumber[$getGuildVar[guildMonthMessages;$get[guildID];0];.]** mensagens foram enviadas por **$getMemberLeaderboardLength[messageMonth;$get[guildID]]** membros.
💬 A média de mensagens do mês anterior é **$getGuildVar[guildActivityMedia]** e atualmente é 

]
;$getGuildVar[color;$guildID;Red]]

  `,
data: {
  "type": 1,
  "description": "Veja informações sobre o servidor!",
  "name": "info"
},
}
