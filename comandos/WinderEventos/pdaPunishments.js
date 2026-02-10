module.exports = [{
	name: "warn-actions",
	type: "awaited",
	code: `



$ifAwaited[$getUserVar[warnsTotal;$get[userID];$guildID]==1;{execute:pdapunish-1warn}]

$let[userID1;$get[userID]]
`
},{
	name: "pdapunish-1warn",
	type: "awaited",
	code: `
	

$sendMessage[Removido $get[removepda] PDAs de <@$get[userID1]>]
$setUserVar[msgXP;$sub[$getUserVar[msgXP;$get[userID1];$guildID];$get[removepda]];$get[userID1];$guildID]
$setUserVar[msgXPtotal;$sub[$getUserVar[msgXPtotal;$get[userID1];$guildID];$get[removepda]];$get[userID1];$guildID]


$let[removepda;$math[$getUserVar[msgXPtotal;$get[userID1];$guildID]/6]]
`
}]