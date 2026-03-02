module.exports = {
  code: `
  $let[userID;$findUser[$option[membro];true]]
  
$let[badges;$if[$getMemberVar[memberIsVerified;$get[userID]]==true;✅ Verificado | ;]$if[$getMemberVar[memberIsStaff;$get[userID]]==true;🛡️ Equipe Patinhas | ;]$if[$memberExists[$guildID;$get[userID]]==true;🐾 Peludo | ;]]


$title[📃 Perfil de @$username[$get[userID]]]
$description[
$if[$getMemberVar[birthday;$get[userID];$guildID]!=;🎂 **$getMemberVar[birthday;$get[userID];$guildID]/$year**;🎂 Utilize **/aniversario adicionar** para registrar uma data!]

**Convidado por: $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fantasma]**
$addField[🎮 Minigames ganhos;$getMemberVar[minigameMonthWins;$get[userID]] (Mês) | $getMemberVar[minigameTotalWins;$get[userID]] (total)]

$addField[⭐ Votos dados pelo Discords.com;$getMemberVar[votesTotal;$get[userID]] (Mês) | $getMemberVar[votesMonth;$get[userID]] (Total)]

$addField[📃 Atividade do membro;✨ $getMemberVar[pdaMonth;$get[userID]]
💬 $getMemberVar[messageMonth;$get[userID]] (Mês)
💬 $getMemberVar[messageWeekly;$get[userID]] (Semana)
💬 $getMemberVar[messageToday;$get[userID]] (Hoje)
]

$addField[Historicamente;
✨ $getMemberVar[pdaTotal;$get[userID]] (Total) | 💬 $getMemberVar[messageTotal;$get[userID]] (Total)
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