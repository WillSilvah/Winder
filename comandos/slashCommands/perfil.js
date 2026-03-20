module.exports = {
  code: `
  $let[userID;$findUser[$option[membro];true]]
  
$jsonLoad[session;$readFile[Recursos/session.json]]

$addContainer[
$addSection[
$addTextDisplay[### $userDisplayName[$get[userID]]
-# **@$userTag[$get[userID]]**
$badges[$get[userID]]
$if[$isBanned[$guildID;$get[userID]]==false;**$if[$getMemberVar[birthday;$get[userID]]!=;🎂 $getMemberVar[birthday;$get[userID]] ($math[$year-$getMemberVar[birthdayYear;$get[userID]]] anos);🎂 /aniversário adicionar]**]
]
$addThumbnail[$userAvatar[$get[userID]]]
]
$if[$memberExists[$guildID;$get[userID]]==true;$addSeparator[Large;true]
$addTextDisplay[
👋 Entrou na patinhas $discordTimestamp[$memberJoinedAt[$guildID;$get[userID]];RelativeTime] em $memberJoinPosition[$guildID;$get[userID]]° lugar
💌 Veio pelo: **$if[$getMemberVar[inviter;$get[userID]]!=;$userTag[$getMemberVar[inviter;$get[userID]]];@Fulano]**
💬 Enviou mensagem $discordTimestamp[$getMemberVar[lastMessageTimestamp;$get[userID]];RelativeTime]
]
;
$if[$isBanned[$guildID;$get[userID]]==false;
$addTextDisplay[$if[$getMemberVar[memberJoinedHere?;$get[userID];$guildID;false]==true;😄 **$userTag[$get[userID]]** já esteve aqui em $discordTimestamp[$getMemberVar[memberJoinedFirstTime;$get[userID]];ShortDateMediumTime];🧐 Não, **$userTag[$get[userID]]** não esteve aqui.]]
]
]
$addTextDisplay[👤 Criou conta $discordTimestamp[$userCreatedAt[$get[userID]];RelativeTime]]
$if[$getMemberVar[warnsTotal;$get[userID]]>0;$addTextDisplay[⚠ Tem **$getMemberVar[warnsTotal;$get[userID]]** advertências!]]
$addSeparator[Large;true]
$if[$isBanned[$guildID;$get[userID]]==false;
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
];
$addTextDisplay[
## $toUpperCase[$userDisplayName[$get[userID]]] ESTÁ BANIDO!
**$guildBanReason[$guildID;$get[userID]]**
]
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
