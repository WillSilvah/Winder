module.exports = [{
name: "lembrarvoto",
aliases: ['votereminder'],
desc: "Ative ou desative o lembrete de votar na Patinhas!",
category: "Utilidades",
usage: "lembrarvoto",
$if: "old",
code: `
$if[$getUserVar[reminderStatus;$authorID;861313067291115541]==true]
🔕 Lembrete desativado, mas tem certeza que não quer deixar ativado? Você pode esquecer de votar na Patinhas ou você não quer mais votar nela?
Sua ajuda é importante para nós criarmos uma comunidade incrível!

$reply
$setUserVar[reminderStatus;false;$authorID;861313067291115541]

$elseIf[$getUserVar[reminderStatus;$authorID;861313067291115541]==false]
🔔 Eba! Vou te lembrar de votar na Patinhas após **12 horas** que você votar tudo certo?

$reply
$setUserVar[reminderStatus;true;$authorID;guildID]

$endelseif
$endif
`
},{
name: "votereminder-true",
type: "awaited",
code: `
🔔 Eba! Vou te lembrar de votar na Patinhas após **6 horas** que você pode votar tudo certo?
-# O tempo de voto é a cada 6 horas no Discords.com

$reply
$setUserVar[reminderStatus;true;$authorID;$guildID]
`
},{
name: "votereminder-false",
type: "awaited",
code: `
🔕 Lembrete desativado, mas tem certeza que não quer deixar ativado? Você pode esquecer de votar na Patinhas ou você não quer mais votar nela?
Sua ajuda é importante para nós criarmos uma comunidade incrível!

$reply
$setUserVar[reminderStatus;false;$authorID;$guildID]
`
}]
