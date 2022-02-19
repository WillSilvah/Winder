module.exports = {
name: "mudarnickname",
aliases: ['nickname','apelido']
code: `
  $reply
<@$authorID> | Seu apelido foi alterado para **$message**!
$changeNickname[$authorID;$message]
$onlyForROles[905245073019641869;942775153530634280;<@$authorID> | Você precisa ter **pinwheel Ultra/Ultra+** para poder usar este comando!
$botTyping
$cooldown[10s;<@$authorID> | Aguarde %time% para poder executar este comando de novo!]
`
}
