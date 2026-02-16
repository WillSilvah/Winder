module.exports = {
    name: "eval",
    desc: "Permite o desenvolvedor executar funções a nível superior",
    category: "Desenvolvedor",
usage: "eval code",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$eval[$message]
`
}