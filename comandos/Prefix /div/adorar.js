module.exports = {
name: "adorar",
code: `
  $reply
  $cooldown[30m;<@$authorID> | Você tem que esperar **%time%** para poder adorar mais uma vez]
$setUserVar[rep;$sum[$getUserVar[rep;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$mentioned[1]!=;<@$authorID> | Você acha que eu sou adivinha? Use esse comando direito! Menciona a pessoa ai ($getServerVar[prefixo]adorar @user)]

$onlyIf[$mentioned[1]!=$authorID;<@$authorID> | Você se adora e eu também, mas infelizmente você só pode dar adoros para pessoas que não sejam você. Mas continue assim ok? Ame a si próprio =D]
$argsCheck[1;<@$authorID> | Quem você adora? Um fantasma? Mencione alguém para adorar! **$getServerVar[prefixo]adorar @$username[$randomUserID]#$discriminator[$randomUserID]**]

<@$authorID> | Você adorou <@$mentioned[1]> com sucesso!
`
}
