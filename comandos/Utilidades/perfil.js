module.exports = [{
	name: "perfil",
	aliases: ["pda", "atividade"],
	desc: "Veja informações de um usuário",
	category: "Utilidades",
	usage: "perfil @user?",
	code: `
$title[1;📃 Perfil de $username[$findUser[$get[userID];true]]]
$description[1;
$if[$getUserVar[birthday;$findUser[$get[userID];true];$guildID]!=;🎂 **$getUserVar[birthday;$findUser[$get[userID];true];$guildID]/$year**;🎂 Utilize **$getGuildVar[prefixo]aniversário** para registrar uma data!]

$addField[1;🎮 Minigames ganhos;$getUserVar[minigameMonthWins;$findUser[$get[userID];true]] (Mês) | $getUserVar[minigameTotalWins;$findUser[$get[userID];true]] (total)]

$addField[1;Votos dados pelo Discords.com;$getUserVar[votesTotal;$findUser[$get[userID];true]] (Mês) | $getUserVar[votesMonth;$findUser[$get[userID];true]] (Total)]

$addField[1;Atividade do membro (histórico);✨ $getUserVar[msgXPtotal;$findUser[$get[userID];true]] | 💬 $getUserVar[messageTotal;$findUser[$get[userID];true]]

$addField[1;Atividade do membro (temporada);✨ $getUserVar[msgXP;$findUser[$get[userID];true]] | 💬 $getUserVar[messageMonth;$findUser[$get[userID];true]]

]
$footer[1;$replaceText[$get[badges]END; | END;;1]]
$thumbnail[1;$userAvatar[$findUser[$get[userID];true]]]
$color[1;Random]

$let[badges;$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberSupporterRole]]==true;🤝 Apoiador | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberVerifiedRole]]==true;✅ Verificado | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[allStaffRole]]==true;🛡️ Equipe Patinhas | ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberActiveRole]]==true;💬 Membro Ativo | ;]]
$let[userID;$findUser[$message[1];true]]

$timezone[America/Recife]
`

}]
