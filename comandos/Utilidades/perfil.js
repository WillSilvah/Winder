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


]

$let[badges;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberSupporterRole]]==true;:handshake: **Apoiador** ;]$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;$customEmoji[pats_foxThumbsUp] **Verificado** ;]$if[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole]]==true;:shield: **Staff** ;]]
$let[userid;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
`

}]
