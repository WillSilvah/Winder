module.exports = [{
	name: "perfil",
	aliases: ["pda", "atividade"],
	desc: "Veja informações de um usuário",
	category: "Utilidades",
	usage: "perfil @user?",
	code: `
$title[1;📃 Perfil de $username[$mentioned[1]]]
$description[1;
$if[$getUserVar[birthday;$mentioned[1];$guildID]!=;🎂 **$getUserVar[birthday;$mentioned[1];$guildID]/$year**;🎂 Utilize **$getGuildVar[prefixo]aniversário** para registrar uma data!]

$addField[1;🎮 Minigames ganhos;$getUserVar[minigameMonthWins;$mentioned[1]] (Mês) | $getUserVar[minigameTotalWins;$mentioned[1]] (total)]

$addField[1;Votos dados pelo Discords.com;$getUserVar[votesTotal;$mentioned[1]] (Mês) | $getUserVar[votesMonth;$mentioned[1]] (Total)]

$addField[1;Atividade do membro (histórico);✨ $getUserVar[msgXPtotal;$mentioned[1]] | 💬 $getUserVar[messageTotal;$mentioned[1]]

$addField[1;Atividade do membro (temporada);✨ $getUserVar[msgXP;$mentioned[1]] | 💬 $getUserVar[messageMonth;$mentioned[1]]

]
$footer[1;$replaceText[$get[badges]END; | END;;1]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$color[1;Random]

$let[badges;$if[$hasRoles[$guildID;$mentioned[1];$getGuildVar[memberSupporterRole]]==true;🤝 Apoiador | ;]$if[$hasRoles[$guildID;$mentioned[1];$getGuildVar[memberVerifiedRole]]==true;✅ Verificado | ;]$if[$hasRoles[$guildID;$mentioned[1];$getGuildVar[allStaffRole]]==true;🛡️ Equipe Patinhas | ;]$if[$hasRoles[$guildID;$mentioned[1];$getGuildVar[memberActiveRole]]==true;💬 Membro Ativo | ;]]

$timezone[America/Recife]
`

}]