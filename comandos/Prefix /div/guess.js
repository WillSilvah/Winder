module.exports = {
name: "adivinharnúmero"
aliases: ['guessnumber', 'guessthenumber']
code: `
$botTyping
$reply
$argsCheck[1;<@$authorID> | Você é que tem que adivinhar qual número estou pensando, não eu adivinhar o seu! Utilize **pw!$randomText[adivinharnúmero;guessnumber;guessthenumber] <número de 1 a 10>
$onlyIf[$message[1]==$random[1;10];<@$authorID> | Ops, você errou! Tente novamente :)]
<@$authorID> | Você acertou! Você ganhou um catavento :)
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]
$cooldown[5m;<@authorID> | Espere *%time%** para executar este comando de novo, enquanto isso, pense qual número irei pensar na próxima!]
`
}
