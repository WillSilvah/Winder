module.exports = [{
	name: "avisar",
	aliases: ["warn", "w", "advertência"],
	desc: "Dê uma advertência em um membro",
	category: "Moderação",
	usage: "avisar @user/userID motivo?",
	code: `
	
$exec[mkdir -p "Recursos/avisos/$guildID/$findUser[$get[userID]]/" && echo '{"staffID": "$get[staffID]", "motivo": "$get[reason]"}' > "Recursos/avisos/$guildID/$findUser[$get[userID]]/aviso_$getUserVar[warnsTotal;$findUser[$get[userID]];$guildID].txt"]


$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]
$ifAwaited[1==1;{execute:punishment-log}]

$setUserVar[lastWarn;{"staffID": "$findUser[$get[staffID]]","reason": "$get[reason]"};$findUser[$get[userID]];$guildID]
$setUserVar[warnsTotal;$sum[$getUserVar[warnsTotal;$findUser[$get[userID]];$guildID];1];$findUser[$get[userID]];$guildID]

$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#6F03FC}}]
$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]

$let[staffID;$authorID]
$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;advertido]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$clientTyping	
`
}]