module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[$message;http;www.;https;http://;http://]==true;
{execute:membernewlink-blocker}]

$onlyIf[$getUserVar[messageTotal;$authorID;$guildID]<=6;]
$onlyIf[$checkContains[$message;tenor;giphy]==false;]

$suppressErrors
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[allMemberRole]==false;]
`
},{
name: "membernewlink-blocker",
type: "awaited",
code: `
$ifAwaited[1==1;{execute:punishment-log}]
$ban[$guildID;$authorID;0;Banido por: $username[$get[staffID]] | Motivo: $get[reason]]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$sendMessage[<@$clientID> **$username[$get[userID]]** foi **$get[puniType]**!]
$sendMessage[w!ban <@$authorID> $get[reason]]
$clientTyping

$let[staffID;$clientID]
$let[userID;$authorID]
$let[reason;Envio de link com a idéia de divulgar algum produto, um programa malicioso ou qualquer outra intenção.]
$let[puniType;banido]
$deleteCommand
`
}]
