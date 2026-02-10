module.exports = [{
	name: "warn-actions",
	type: "awaited",
	code: `

$ifAwaited[$getUserVar[warnsTotal;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]];$guildID]==1;{execute:pdapunish-1warn}]


`
},{
	name: "pdapunish-1warn",
	type: "awaited",
	code: `
	

$sendMessage[Removido $get[removepda] PDAs de <@$get[userID1]>]
$setUserVar[msgXP;$sub[$getUserVar[msgXP;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]];$guildID];$get[removepda]];$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]];$guildID]
$setUserVar[msgXPtotal;$sub[$getUserVar[msgXPtotal;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]];$guildID];$get[removepda]];$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]];$guildID]


$let[removepda;$math[$getUserVar[msgXPtotal;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]];$guildID]/6]]
`
}]