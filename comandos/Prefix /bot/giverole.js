module.exports = {
name: "giverole",
code: `
$giveRole[$message[2]]
$onlyPerms[manageroles;<@$authorID> | Você precisa ter a permissão de gerenciar cargos para poder usar este comando!]
<@$authorID> | O cargo foi dado para <@$mentioned[1]>!
$onlyIf[$mentioned[1]!=;<@$authorID> | Você precisa mencionar alguém para usar este comando! **pw!giverole <@usuário> <ID do cargo>**]
$onlyIf[$message[2]!=;<@$authorID> | Você precisa por o ID do cargo para usar este comando! **pw!giverole <@usuário> <ID do cargo>**]
`
}