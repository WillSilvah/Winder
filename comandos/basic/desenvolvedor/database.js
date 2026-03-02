module.exports = {
    name: "database baixar",
    desc: "Pegue todos os dados catalogados pelo Winder de um usuário",
    category: "Desenvolvedor",
	usage: "database baixar userID",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$mkdir[Recursos/database]
$writeFile[Recursos/database/WinderDB_$username[$findUser[$message[0]]].json;
$searchDB[;$findUser[$message[0]];;;]
;utf8]

$attachment[Recursos/database/WinderDB_$username[$findUser[$message[0]]].json;WinderDB_$username[$findUser[$message[0]]].json;false;utf8;]
`
}