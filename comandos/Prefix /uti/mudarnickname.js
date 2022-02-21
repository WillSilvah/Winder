module.exports = {
name: "mudarnickname",
aliases: ['nickname','apelido','mudarapelido'],
code: `$botTyping
  $reply
<@$authorID> | Seu apelido foi alterado para **$message**!
$setUserVar[nickname;$message;$authorID]
$changeNickname[$authorID;$message]
$cooldown[10s;<@$authorID> | Aguarde %time% para poder executar este comando de novo!]
`
}
