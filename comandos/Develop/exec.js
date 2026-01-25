module.exports = [{
name: "exec",
aliases: ["shell", "console"],
code: `
$log[[EXEC COMMAND] $userTag: $message]

$exec[$message]

$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}
`
}]