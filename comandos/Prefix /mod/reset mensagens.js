module.exports = {
name: "reset mensagens",
code: `

$resetServerVar[allmensagens]
$resetUserVar[mensagens]
$resetGlobalUserVar[mensagens]

$onlyForIDs[494795833351602176;882913524291088384;<@$authorID> você não tem permissão para executar este comando!]
<@$authorID> | Todas as mensagens foram resetadas! Agora estarei contando as novas mensagens :)
`
}
