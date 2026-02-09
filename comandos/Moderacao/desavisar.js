module.exports = [{
	name: "desavisar",
	aliases: ["unwarn", "uw"],
	desc: "Remova uma advertência de um membro",
	category: "Moderação",
	usage: "desavisar @user/userID motivo?",
	code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[1==1;{execute:punishment-log}]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]
	
$setUserVar[warnsTotal;$sub[$getUserVar[warnsTotal;$get[userID];$guildID];1];$get[userID];$guildID]

$onlyIf[$getUserVar[warnsTotal;$get[userID];$guildID]<=0;<@$authorID> O usuário não tem nenhuma advertência.]
$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#6F03FC}}]
$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$let[staffID;$authorID]
$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;desavisado]

$clientTyping	
`
}]