module.exports = {
name: "adivinharnúmero",
aliases: ['guessnumber', 'guessthenumber','adivinharnumero'],
$if: "v4",
code: `$botTyping
$if[$getServerVar[guess]==$message[1]]
<@$authorID> | Parabéns! Você adivinhou o número que estava pensando!
Você ganhou um catavento!
$setServerVar[guess;$random[1;20]]
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]

$elseIf[$getServerVar[guess]!=$message[1]]
<@$authorID> | Parabéns! Você errou :joy:
Tente novamente daqui a pouco

$endelseIf
$endif
$cooldown[1m;<@$authorID> | Espere **%time%** para adivinhar novamente!]
`
}
