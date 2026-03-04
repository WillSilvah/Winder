module.exports = {
    name: "database",
    desc: "Permite o download completo de todos os dados de um usuário que foram salvos pelo Winder",
    category: "Desenvolvedor",
	usage: "database",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$if[$message[0]==baixar;

$let[userID;$findUser[$message[1]]]

$attachment[$searchDB[;$get[userID];Roles.txt;true]

]
]
`
}