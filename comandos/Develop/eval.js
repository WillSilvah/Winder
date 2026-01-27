module.exports = [{
name: "eval",
aliases: ['executar'],
desc: "Permite o desenvolvedor executar funções a nível superior",
category: "Desenvolvedor",
usage: "eval",
code: `
$log[[EVAL COMMAND] $userTag: $message]

$eval[$message]

$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]

`
}]
