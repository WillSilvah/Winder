module.exports = {
name: "mudarnickname",
aliases: ['nickname','apelido','mudarapelido'],
code: `$botTyping
$reply
$changeNickname[$authorID;$message]
<@$authorID> | Seu apelido foi alterado para **$message**!
$setUserVar[nickname;$message;$authorID]
$argsCheck[1;<@$authorID> | Qual apelido você quer que eu chame você? **pw!$randomText[nickname;mudarapelido;apelido] <novo apelido>**]
$cooldown[10s;<@$authorID> | Aguarde %time% para poder executar este comando de novo!]
`
}
