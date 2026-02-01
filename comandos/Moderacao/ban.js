module.exports = [{
name: "ban",
aliases: ["banir", "b", "exilar"],
desc: "Bane um usuário permanentemente",
category: "Moderação",
usage: "ban @user/userID motivo?",
code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[1==1;{execute:punishment-log}]

$ban[$guildID;$get[userID];0;Banido por: $userTag[$get[staffID]] | Motivo: $get[reason]]

$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$onlyPerms[banmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **banir membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#6F03FC}}]
$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$let[staffID;$authorID]
$let[userID;$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;banido]

$clientTyping
`
}]