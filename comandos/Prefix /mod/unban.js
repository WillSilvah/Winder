
module.exports = {
 name: "unban",
 aliases: ['desbanir'],
 code: `
$reply
$title[1;Usuario desbanido!]
$description[1;
Usuário: <@$mentioned[1]>
Staff: <@$authorID>
]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$message[1]]]

$unban[$findUser[$message[1];debanido por: $username[$authorID] | Motivo:$noMentionMessage]
$onlyIf[$mentioned[1]!=;<@$authorID> | Mencione um membro para poder desbanir!]
$onlyPerms[ban;<@$authorID> | Você não tem permissão de banir membros para isso.]`
}
