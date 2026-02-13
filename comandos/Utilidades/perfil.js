module.exports = [{
	name: "perfil",
	aliases: ["userinfo"],
	desc: "Veja informações de um usuário",
	category: "Utilidades",
	usage: "perfil @user?",
	code: `
$title[1;📃 Perfil de $username[$get[userID]]]
$description[1;
$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberSupporterRole]]==true;🤝 **É um apoiador**;$customEmoji[pats_foxCry] **Não é um apoiador**] | $if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;$customEmoji[pats_foxThumbsUp] **É Verificado!**;$customEmoji[pats_foxCry] **Não é verificado**]
	
	
	

$let[userid;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
`
}]