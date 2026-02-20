module.exports = {
code: `
$ephemeral
$let[userID;$targetMessage[authorID]]
$let[badges;$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberSupporterRole]]==true;🤝 Apoiador | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberVerifiedRole]]==true;✅ Verificado | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[allStaffRole]]==true;🛡️ Equipe Patinhas | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberActiveRole]]==true;💬 Membro Ativo | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[allMemberRole]]==true;🐾 Peludo | ;]]


$title[📃 Perfil de $username[$get[userID]]]
$description[
$if[$getMemberVar[birthday;$get[userID];$guildID]!=;🎂 **$getMemberVar[birthday;$get[userID];$guildID]/$year**;🎂 Utilize **/aniversario adicionar** para registrar uma data!]

$addField[🎮 Minigames ganhos;$getMemberVar[minigameMonthWins;$get[userID]] (Mês) | $getMemberVar[minigameTotalWins;$get[userID]] (total)]

$addField[Votos dados pelo Discords.com;$getMemberVar[votesTotal;$get[userID]] (Mês) | $getMemberVar[votesMonth;$get[userID]] (Total)]

$addField[Atividade do membro (histórico);✨ $getMemberVar[pdaTotal;$get[userID]] | 💬 $getMemberVar[messageTotal;$get[userID]]]

$addField[Atividade do membro (temporada);✨ $getMemberVar[pdaMonth;$get[userID]] | 💬 $getMemberVar[messageMonth;$get[userID]]]

]
$footer[$replaceText[$get[badges]END; | END;;1]]
$thumbnail[$userAvatar[$get[userID]]]
$color[Random]
  `,
data: {
  "type": 3,
  "name": "Ver perfil",
  "name_localizations": {
    "en-GB": "View profile",
    "en-US": "View profile",
    "pt-BR": "Ver perfil"
  }
},
};