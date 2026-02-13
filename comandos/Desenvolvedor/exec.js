module.exports = [{
name: "exec",
aliases: ["shell", "console"],
code: `
$log[[EXEC COMMAND] $userTag: $message]

$exec[$message]

$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}
`
}]