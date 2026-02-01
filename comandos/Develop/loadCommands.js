module.exports = [{
 name: "carregarcomandos",
 aliases: ['loadbot', 'loadcommands'],
 desc: "Faz o bot carregar todos os comandos",
category: "Desenvolvedor",
usage: "carregarcomandos",
 code: `
<@$authorID> Todos os comandos foram atualizados! __**\`$commandsCount comandos\`**__.
 
$updateCommands
$clientTyping
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`}]