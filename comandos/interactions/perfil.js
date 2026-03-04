module.exports = {
  code: `
  $let[userID;$findUser[$option[membro];true]]
  
$jsonLoad[session;$readFile[Recursos/session.json]]
  
$let[badges;$if[$userGuildTag[$get[userID]]==PATS;$emoji[$emojiID[pats_logo]] ;]$if[$getMemberVar[memberIsVerified;$get[userID]]==true;✅ ;]$if[$getMemberVar[memberIsStaff;$get[userID]]==true;🛡️ ;]$if[$memberExists[$guildID;$get[userID]]==true;🐾 ;]$if[$getMemberVar[memberIsActive;$get[userID]]==true;💬;]]

$addContainer[
$addSection[
$addTextDisplay[### @$userTag[$get[userID]]
**$get[badges]**
]
$addThumbnail[$userAvatar[$get[userID]]]
]
$if[$memberExists[$guildID;$get[userID]]==true;$addSeparator[Large;true]
$addTextDisplay[
👋 Entrou na patinhas $discordTimestamp[$memberJoinedAt[$guildID;$get[userID]];RelativeTime] em $memberJoinPosition[$guildID;$get[userID]]° lugar
]
]
$addSeparator[Large;true]
$addTextDisplay[
### $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]
💬 **$getMemberVar[messageToday;$get[userID];$guildID;0]** mensagens enviadas hoje
💬 **$getMemberVar[messageWeekly;$get[userID];$guildID;0]** mensagens enviadas nessa semana
💬 **$getMemberVar[messageMonth;$get[userID];$guildID;0]** mensagens enviadas neste mês
✨ **$getMemberVar[pdaMonth;$get[userID];$guildID;0]** pontos de atividade adquiridos
⬆️ Votou **$getMemberVar[votesTotal;$get[userID];$guildID;0]** vezes
🎮 **$getMemberVar[minigameMonthWins;$get[userID];$guildID;0]** minigames ganhos]
$addSeparator[Large;true]
$addTextDisplay[### ANTERIORMENTE
💬 **$getMemberVar[messageTotal;$get[userID];$guildID;0]** mensagens enviadas
✨ **$getMemberVar[pdaTotal;$get[userID];$guildID;0]** pontos de atividade adquiridos
⬆️ Votou **$getMemberVar[votesTotal;$get[userID];$guildID;0]** vezes
🎮 **$getMemberVar[minigameTotalWins;$get[userID];$guildID;0]** minigames ganhos
]
;$if[$memberExists[$guildID;$get[userID]]==true;$memberDisplayColor[$guildID;$get[userID]];Red]]

  `,
data: {
  "type": 1,
  "name": "perfil",
  "description": "Veja informações sobre a atividade de um membro",
  "name_localizations": {
    "en-GB": "profile",
    "en-US": "profile",
    "pt-BR": "perfil"
  },
  "options": [
    {
      "type": 6,
      "description": "Menção, ID ou @username.",
      "name": "membro",
      "name_localizations": {
        "en-GB": "member",
        "en-US": "member",
        "pt-BR": "membro"
      },
      "required": false
    }
  ]
},
};