module.exports = {
code: `
$ephemeral
$let[userID;$targetMember[id]]
$onlyIf[$memberExists[1462224054676099094;$get[userID]]==true;<@$authorID> | Este membro não está na Patinhas!]

$let[badges;$if[$hasRoles[1462224054676099094;$get[userID];$getGuildVar[memberSupporterRole]]==true;🤝 Apoiador | ;]$if[$hasRoles[1462224054676099094;$get[userID];$getGuildVar[memberVerifiedRole]]==true;✅ Verificado | ;]$if[$hasRoles[1462224054676099094;$get[userID];$getGuildVar[allStaffRole]]==true;🛡️ Equipe Patinhas | ;]$if[$hasRoles[1462224054676099094;$get[userID];$getGuildVar[memberActiveRole]]==true;💬 Membro Ativo | ;]$if[$hasRoles[1462224054676099094;$get[userID];$getGuildVar[allMemberRole]]==true;🐾 Peludo | ;]]


$title[📃 Perfil de $username[$get[userID]]]
$description[
$if[$getMemberVar[birthday;$get[userID];1462224054676099094]!=;🎂 **$getMemberVar[birthday;$get[userID];1462224054676099094]/$year**;🎂 Utilize **/aniversario adicionar** para registrar uma data!]

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
  "type": 2,
  "name": "ver-perfil",
},
};