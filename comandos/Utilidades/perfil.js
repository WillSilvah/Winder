module.exports = [{
	name: "perfil",
	aliases: ["userinfo"],
	desc: "Veja informações de um usuário",
	category: "Utilidades",
	usage: "perfil @user?",
	code: `
$title[1;📃 Perfil de $username[$get[userID]]]
$description[1;
$get[badges]

$addField[1;🎮 Minigames ganhos;$getUserVar[minigameMonthWins;$get[userID]] (Mês) | $getUserVar[minigameTotalWins;$get[userID]] (total)]

$addField[1;Votos dados pelo Discords.com;$getUserVar[votesTotal;$get[userID]] (Mês) | $getUserVar[votesMonth;$get[userID]] (Total)]

$addField[1;Atividade do membro (histórico);✨ $getUserVar[msgXPtotal;$get[userID]] | 💬 $getUserVar[messageTotal;$get[userID]]

$addField[1;Atividade do membro (temporada);✨ $getUserVar[msgXP;$get[userID]] | 💬 $getUserVar[messageMonth;$get[userID]]

]
$thumbnail[1;$userAvatar[$get[userID]]]
$color[1;Random]

$let[badges;$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberSupporterRole]]==true;🤝 **Apoiador** ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberVerifiedRole]]==true;$customEmoji[pats_foxThumbsUp] **Verificado** ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[allStaffRole]]==true;🛡 **Equipe Patinhas** ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberActiveRole]]==true;💬 **Membro ativo** ;]]
$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
`

}]



