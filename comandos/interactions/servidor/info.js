module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]
$addContainer[
$addSection[
$addTextDisplay[## $toUpperCase[$guildName]
**👤 $separateNumber[$guildMemberCount[1462224054676099094;;false];.] | 🟢 $separateNumber[$guildMemberCount[1462224054676099094;online;false];.] | 🚀 $guildBoostCount[$guildID]**
⭐️ $discordTimestamp[]
]
$addThumbnail[$guildIcon]
]
$addSeparator[Large;true]
$addTextDisplay[
### $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]
💬 **$getMemberLeaderboardLength[messageMonth;$get[guildID]]** membros enviaram **$separateNumber[$getGuildVar[guildMonthMessages;$get[guildID];0];.]** mensagens neste mês.
💬 **$getMemberLeaderboardLength[messageWeekly;$guildID]** membros enviaram **$separateNumber[$getGuildVar[guildWeeklyMessages;$guildID;0];.]** mensagens nessa semana.
💬 **$getMemberLeaderboardLength[messageToday;$guildID]** membros enviaram **$separateNumber[$getGuildVar[guildTodayMessages;$guildID;0];.]** mensagens hoje.
💬 A média de mensagens do mês anterior é **$getGuildVar[guildActivityMedia;$guildID;0]** e atualmente é **$truncate[$math[$media[messageMonth;$guildMemberCount[1462224054676099094;;false]]/3]]**.
]
$addSeparator[Large;true]
;$getGuildVar[color;$guildID;Red]]

  `,
data: {
  "type": 1,
  "description": "Veja informações sobre o servidor!",
  "name": "info"
},
}
