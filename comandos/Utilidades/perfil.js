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

$addField[1;Atividade do membro;]


]

$let[badges;$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberSupporterRole]]==true;:handshake: **Apoiador** ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberVerifiedRole]]==true;$customEmoji[pats_foxThumbsUp] **Verificado** ;]$if[$hasRoles[$guildID;$get[userID];$getGuildVar[allStaffRole]]==true;:shield: **Equipe Patinhas** ;]]
$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
`

}]


