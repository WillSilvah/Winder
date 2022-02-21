module.exports = {
name: "usuáriomudarapelido",
aliases: ['userchangenickname'],
code: `
  $reply
<@$authorID> | Apelido de <@$mentioned[1] foi alterado para **$noMentionMessage**!
$changeNickname[$mentioned[1];$noMentionMessage]
$onlyPerms[managenicknames;<@$authorID> | Você não tem permissão de **gerenciar apelidos**]
$botTyping
$cooldown[10s;<@$authorID> | Aguarde %time% para poder executar este comando de novo!]
`
