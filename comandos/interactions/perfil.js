module.exports = {
  code: `
  $let[userID;$findUser[$option[membro];true]]
  
$let[badges;$if[$getMemberVar[memberIsVerified;$get[userID]]==true;✅ Verificado | ;]$if[$getMemberVar[memberIsStaff;$get[userID]]==true;🛡️ Equipe Patinhas | ;]$if[$memberExists[$guildID;$get[userID]]==true;🐾 Peludo | ;]]


$title[📃 Perfil de $if[$userGuildTag[$get[userID]]==PATS;$emoji[$emojiID[pats_logo]]] @$username[$get[userID]]]
$description[
$if[$getMemberVar[birthday;$get[userID];$guildID]!=;🎂 **$getMemberVar[birthday;$get[userID];$guildID]/$year**;🎂 Utilize **/aniversario adicionar** para registrar uma data!]

$addField[$memberJoinPosition[$guildID;$get[userID]]° membro a entrar;$discordTimestamp[$memberJoinedAt[$guildID;$get[userID]];RelativeTime]]

$addField[🎮 Minigames ganhos;$getMemberVar[minigameMonthWins;$get[userID];$guildID;0] (Mês) | $getMemberVar[minigameTotalWins;$get[userID];$guildID;0] (total)]

$addField[⭐ Votos dados pelo Discords.com;$getMemberVar[votesTotal;$get[userID];$guildID;0] (Mês) | $getMemberVar[votesMonth;$get[userID];$guildID;0] (Total)]

$addField[📃 Atividade do membro;✨ $getMemberVar[pdaMonth;$get[userID];$guildID;0]
💬 $getMemberVar[messageMonth;$get[userID];$guildID;0] (Mês)
💬 $getMemberVar[messageWeekly;$get[userID];$guildID;0] (Semana)
💬 $getMemberVar[messageToday;$get[userID];$guildID;0] (Hoje)
]

$addField[Historicamente;
✨ $getMemberVar[pdaTotal;$get[userID];$guildID;0] (Total) | 💬 $getMemberVar[messageTotal;$get[userID];$guildID;0] (Total)
]

]
$footer[$replaceText[$get[badges]END; | END;;1]]
$thumbnail[$userAvatar[$get[userID]]]
$color[Random]

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