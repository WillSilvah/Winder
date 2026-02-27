module.exports = {
    name: "exec",
    desc: "Permite o desenvolvedor executar comandos diretamente no sistema operacional",
    category: "Desenvolvedor",
	usage: "exec code",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$exec[$message]
`
}
