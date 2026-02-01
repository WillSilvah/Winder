module.exports = [{
name: "expulsar",
aliases: ["kick","k"],
desc: "Expulsa um usuário do servidor",
category: "Moderação",
usage: "expulsar @user/userID motivo?",
code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]
$ifAwaited[1==1;{execute:punishment-log}]
$kick[$guildID;$get[userID];Expulso por: $userTag[$get[staffID]] | Motivo: $get[reason]]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#32a852}}]
$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione** o usuário]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$let[staffID;$authorID]
$let[userID;$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;expulso]

$clientTyping
`
}]