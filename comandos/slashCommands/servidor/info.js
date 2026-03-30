module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]
$addContainer[
$addSection[
$addTextDisplay[## $toUpperCase[$guildName]
**👤$separateNumber[$guildMemberCount[1462224054676099094;;false];.] | 🟢$separateNumber[$math[$guildMemberCount[$guildID;online;false]+$guildMemberCount[$guildID;dnd;false]+$guildMemberCount[$guildID;idle;false]];.] | ⭐️$getGuildVar[membersJoinedMonth;$guildID;0] | 🚀$guildBoostCount[$guildID]**
⭐️ $discordTimestamp[$guildCreatedAt[$guildID];RelativeTime]
]
$addThumbnail[$guildIcon]
]
$addSeparator[Small;true]
$addTextDisplay[
### $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]
💬 **$getMemberLeaderboardLength[messageMonth;$guildID]** **($truncate[$math[$getMemberLeaderboardLength[messageMonth;$guildID]/$guildMemberCount[1462224054676099094;;false]*100]]%)** membros enviaram **$separateNumber[$getGuildVar[guildMonthMessages;$guildID;0];.]** mensagens neste mês.
💬 **$getMemberLeaderboardLength[messageWeekly;$guildID]** **($truncate[$math[$getMemberLeaderboardLength[messageWeekly;$guildID]/$getMemberLeaderboardLength[messageMonth;$guildID]*100]]%)** membros enviaram **$separateNumber[$getGuildVar[guildWeeklyMessages;$guildID;0];.]** mensagens nessa semana.
💬 **$getMemberLeaderboardLength[messageToday;$guildID]** **($truncate[$math[$getMemberLeaderboardLength[messageToday;$guildID]/$getMemberLeaderboardLength[messageMonth;$guildID]*100]]%)** membros enviaram **$separateNumber[$getGuildVar[guildTodayMessages;$guildID;0];.]** mensagens hoje.
💬 A média de mensagens do mês anterior é **$getGuildVar[guildActivityMedia;$guildID;0]** e atualmente é **$truncate[$math[$media[messageMonth;$getMemberLeaderboardLength[messageMonth;$guildID]]]]**.
]
$addSeparator[Small;true]
$addTextDisplay[
🎮 $discordTimestamp[$getGuildVar[minigameNextTime];RelativeTime] pode acontecer um minigame. (**$getGuildVar[oldMsgPerMinute;$guildID;0] mensagens por minuto**)
🎮 **$getGuildVar[minigameExecuteCount;$guildID;0]** minigames executados.
🎮 **$getGuildVar[minigameGuildWins;$guildID;0]** minigames ganhos.
]

;$getGuildVar[guildColor;$guildID]]

  `,
data: {
  "type": 1,
  "description": "Veja informações sobre o servidor!",
  "name": "info"
},
}
