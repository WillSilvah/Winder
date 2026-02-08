module.exports = [{
name: "desbanir",
aliases: ['unban','ub'],
desc: "Desbana um usuário",
category: "Moderação",
usage: "desbanir @user/userID motivo?",
code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]
$ifAwaited[1==1;{execute:punishment-log}]
$unban[$guildID;$get[userID];Desbanido por:$userTag[$get[staffID]] | Motivo: $get[reason]]

$onlyPerms[banmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **banir membros**.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} }]
$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$let[staffID;$authorID]
$let[userID;$message[1]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;desbanido]

$clientTyping
`
}]
