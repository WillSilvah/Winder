module.exports = [{
	name: "perfil",
	aliases: ["userinfo"],
	desc: "Veja informações de um usuário",
	category: "Utilidades",
	usage: "perfil @user?",
	code: `
$title[1;📃 Perfil de $username[$findUser[$get[userID]]]]
$description[1;

$addField[1;🎮 Minigames ganhos;$getUserVar[minigameMonthWins;$findUser[$get[userID]]] (Mês) | $getUserVar[minigameTotalWins;$findUser[$get[userID]]] (total)]

$addField[1;Votos dados pelo Discords.com;$getUserVar[votesTotal;$findUser[$get[userID]]] (Mês) | $getUserVar[votesMonth;$findUser[$get[userID]]] (Total)]

$addField[1;Atividade do membro (histórico);✨ $getUserVar[msgXPtotal;$findUser[$get[userID]]] | 💬 $getUserVar[messageTotal;$findUser[$get[userID]]]

$addField[1;Atividade do membro (temporada);✨ $getUserVar[msgXP;$findUser[$get[userID]]] | 💬 $getUserVar[messageMonth;$findUser[$get[userID]]]

]
$footer[1;$if[$get[badges]==;;$get[badges]\n\n]]
$thumbnail[1;$userAvatar[$findUser[$get[userID]]]]
$color[1;Random]

$let[badges;$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberSupporterRole]]==true;🤝 Apoiador;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberVerifiedRole]]==true;$if[$get[badges]!=; | ;]✅ Verificado;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[allStaffRole]]==true;$if[$get[badges]!=; | ;]🛡️ Equipe Patinhas;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberActiveRole]]==true;$if[$get[badges]!=; | ;]💬 Membro Ativo;]]

$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
`

}]



