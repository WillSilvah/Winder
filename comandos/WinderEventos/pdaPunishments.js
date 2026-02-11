module.exports = [{
	name: "warn-actions",
	type: "awaited",
	code: `
$sendMessage[Removido $get[removepda] PDAs de <@$mentioned[1]>]
$setUserVar[msgXP;$sub[$getUserVar[msgXP;$mentioned[1];$guildID];$get[removepda]];$mentioned[1];$guildID]
$setUserVar[msgXPtotal;$sub[$getUserVar[msgXPtotal;$mentioned[1];$guildID];$get[removepda]];$mentioned[1];$guildID]


$let[removepda;$divide[$getUserVar[msgXPtotal;$mentioned[1];$guildID];6]]
`
}]