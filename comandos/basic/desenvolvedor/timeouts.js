module.exports = {
    name: "timeouts",
    desc: "Envia um arquivo json com todos os dados de timeouts avancados a ser executados",
    category: "Desenvolvedor",
	usage: "timeouts",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$jsonLoad[timeouts;$getGlobalVar[timeouts]]

**$argsCount[$jsonValues[timeouts; ]]** comandos esperando serem executados.
$attachment[$getGlobalVar[timeouts];WinderDB_Timeouts.json;true]
`
}