module.exports = {
    name: "loadbot",
    desc: "Recarrega o Winder sem precisar reiniciar inteiro.",
    category: "Desenvolvedor",
	usage: "loadbot",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$startTyping[$clientTyping]

$updateApplicationCommands
$updateCommands

$sendMessage[$channelID;<@$authorID> **$username[$clientID]** carregado!]
`
}