module.exports = [{
name: "lembrarvoto",
aliases: ['votereminder'],
desc: "Ative ou desative o lembrete de votar na Pinwheel!",
category: "Utilidades",
usage: "lembrarvoto",
$if: "old",
code: `
$if[$getUserVar[reminderStatus;$authorID;861313067291115541]==true]
🔕 Lembrete desativado, mas tem certeza que não quer deixar ativado? Você pode esquecer de votar na Pinwheel ou você não quer mais votar nela?
Sua ajuda é importante para nós criarmos uma comunidade incrível!

$reply
$setUserVar[reminderStatus;false;$authorID;861313067291115541]

$elseIf[$getUserVar[reminderStatus;$authorID;861313067291115541]==false]
🔔 Eba! Vou te lembrar de votar na Pinwheel após **12 horas** que você votar tudo certo?

$reply
$setUserVar[reminderStatus;true;$authorID;861313067291115541]

$endelseif
$endif
`
},{
name: "votereminder-true",
type: "awaited",
code: `
🔔 Eba! Vou te lembrar de votar na Pinwheel após **12 horas** que você votar tudo certo?

$reply
$setUserVar[reminderStatus;true;$authorID;861313067291115541]
`
},{
name: "votereminder-false",
type: "awaited",
code: `
🔕 Lembrete desativado, mas tem certeza que não quer deixar ativado? Você pode esquecer de votar na Pinwheel ou você não quer mais votar nela?
Sua ajuda é importante para nós criarmos uma comunidade incrível!

$reply
$setUserVar[reminderStatus;false;$authorID;861313067291115541]
`
}]
