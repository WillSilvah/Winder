module.exports = {
    name: "database",
    desc: "Pegue todos os dados catalogados pelo Winder de um usuário",
    category: "Desenvolvedor",
	usage: "database baixar userID",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$let[userID;$findUser[$message[0]]]

$mkdir[Recursos/database]
$writeFile[Recursos/database/WinderDB_$username[$get[userID]].json;
$searchDB[;$get[userID];;;]
;utf8]

$attachment[Recursos/database/WinderDB_$username[$get[userID]].json;WinderDB_$username[$get[userID]].json;false;utf8;]
`
}