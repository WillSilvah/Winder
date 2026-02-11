module.exports = [{
 	name: "winder load",
	desc: "Faz o bot carregar todos os comandos",
	category: "Desenvolvedor",
	usage: "carregarcomandos",
	code: `
<@$authorID> Todos os comandos foram atualizados! __**\`$commandsCount comandos\`**__.
 
$updateCommands
$clientTyping
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`
},{
	name: "winder update",
	desc: "Atualize o Winder sem precisar acessar o terminal",
	category: "Desenvolvedor",
	usage: "winder update",
	code: `

$log[$exec[pm2 restart winder-canary]]
$sendMessage[<@$authorID> Reiniciando em **3 segundos**...
$clientTyping
$sendMessage[<@$authorID> Atualizando para **$getVersion**...]
$wait[2s]
$clientTyping
$updateVersion
$wait[2s]
$clientTyping
$sendMessage[<@$authorID> Executado **npm install**]
$wait[5s]
$clientTyping
$log[$exec[npm install]]
$clientTyping
$sendMessage[<@$authorID> | Executado **install aoijs@github:aoijs/aoi.js**...]
$wait[2s]
$clientTyping
$log[$exec[npm install aoijs@github:aoijs/aoi.js]
$clientTyping
$sendMessage[<@$authorID> Atualizando **$username[$clientID]**...]
$clientTyping

$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`
}]