
module.exports = {
 name: "ban",
 aliases: ['banir'],
 code: `
$reply
$title[1;Usuario punido!]
$description[1;
Usuário: <@$mentioned[1]>
Motivo: $noMentionMessage
Staff: <@$authorID>
]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$ban[$findUser[$mentioned[1];Banido por: $username[$authorID] | Motivo:$noMentionMessage]
$onlyIf[$mentioned[1]!=;<@$authorID> | Mencione um membro para poder banir!]
$argsCheck[1;<@$authorID> | Forma correta de usar este comando: **$getServerVar[prefixo]ban <@user> <motivo>**]
$onlyIf[$mentioned[1;no]!=$authorID;<@$authorID> | Por questões de segurança, você não pode executar este comando em você mesmo, peça para que outra pessoa usar em você.]
$onlyPerms[ban;<@$authorID> | Você não tem permissão de banir membros para isso.]`
}
