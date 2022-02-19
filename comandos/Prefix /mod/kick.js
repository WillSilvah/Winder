
module.exports = {
  name: "kick",
  aliases: ['expulsar'],
  code: `
$reply
$title[1;***Usuario punido!***]
$description[1;**
Usuário: <@$mentioned[1]>
Motivo: $noMentionMessage
Staff: <@$authorID>
**]
$color[1;RANDOM]
$kick[$findUser[$mentioned[1]]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$onlyIf[$mentioned[1]!=;Mencione alguem Para expulsar!]
$onlyIf[$mentioned[1;no]!=$authorID;<@$authorID> | Por questões de segurança, você não pode executar este comando em você mesmo, peça para que outra pessoa usar em você.]
$$argsCheck[1;<@$authorID> | Forma correta de usar este comando: **$getServerVar[prefixo]ban <@user> <motivo>**]
$onlyPerms[kick;<@$authorID> | Você não tem a permissão de expulsar membros para executar esse comando.***]
`
}
