module.exports = {
  code: `
  $let[userID;$findUser[$option[membro];true]]
  
$jsonLoad[session;$readFile[Recursos/session.json]]

$addContainer[
$addSection[
$addTextDisplay[### $userDisplayName[$get[userID]]
-# **@$userTag[$get[userID]]**
$badges[$get[userID]]
**$if[$getMemberVar[birthday;$get[userID]]!=;🎂 $getMemberVar[birthday;$get[userID]] ($math[$year-$getMemberVar[birthdayYear;$get[userID]]] anos);Use "/aniversário adicionar" para seu aniversário aparecer aqui!]**
]
$addThumbnail[$userAvatar[$get[userID]]]
]
$if[$memberExists[$guildID;$get[userID]]==true;$addSeparator[Large;true]
$addTextDisplay[
👋 Entrou na patinhas $discordTimestamp[$memberJoinedAt[$guildID;$get[userID]];RelativeTime] em $memberJoinPosition[$guildID;$get[userID]]° lugar
💌 Veio pelo: **$if[$inviterID[$guildID;$get[userID]]!=;@$username[$inviterID[$guildID;$get[userID]]];@Fulano]**
👀 Visto $discordTimestamp[$getMemberVar[lastMessageTimestamp;$get[userID]];RelativeTime]
]
;
$addTextDisplay[$if[$getMemberVar[memberJoinedHere?;$get[userID];$guildID;false]==true;😄 **$userTag[$get[userID]]** esteve aqui!;🧐 Não, **$userTag[$get[userID]]** não esteve aqui.]]
]
$addTextDisplay[👤 Criou conta $discordTimestamp[$userCreatedAt[$get[userID]];RelativeTime]]
$addSeparator[Large;true]
$addTextDisplay[
### $toUpperCase[TEMPORADA $env[session;number]: $env[session;name]]
💬 **$getMemberVar[messageToday;$get[userID];$guildID;0]** mensagens enviadas hoje
💬 **$getMemberVar[messageWeekly;$get[userID];$guildID;0]** mensagens enviadas nessa semana
💬 **$getMemberVar[messageMonth;$get[userID];$guildID;0]** mensagens enviadas neste mês
✨ **$getMemberVar[pdaMonth;$get[userID];$guildID;0]** pontos de atividade adquiridos
⬆️ Votou **$getMemberVar[votesMonth;$get[userID];$guildID;0]** vezes
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