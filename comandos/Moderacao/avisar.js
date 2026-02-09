module.exports = [{
	name: "avisar",
	aliases: ["warn", "w", "advertência"],
	desc: "Dê uma advertência em um membro",
	category: "Moderação",
	usage: "avisar @user/userID motivo?",
	code: `

$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$setUserVar[lastWarnStaffID;$get[staffID];$get[userID];$guildID]
$setUserVar[lastWarnReason;$get[reason];$get[userID];$guildID]
	
$setUserVar[warnsTotal;$sum[$getUserVar[warnsTotal;$get[userID];$guildID];1];$get[userID];$guildID]

$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#6F03FC}}]
$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$let[staffID;$authorID]
$let[userID;$mentioned[1]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;advertido]

$clientTyping	
`
}]