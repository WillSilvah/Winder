module.exports = {
name: "adivinharnúmero",
aliases: ['guessnumber', 'guessthenumber','adivinharnumero'],
$if: "v4",
code: `$botTyping
$if[$getServerVar[guess]==$message[1]]
<@$authorID> | Parabéns! Você adivinhou o número que estava pensando!
Você ganhou um catavento!
$changeNickname[$authorID;[LeitorDeMentes] - $username]
$setServerVar[guess;$random[1;20]]
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]

$elseIf[$getServerVar[guess]!=$message[1]]
<@$authorID> | Parabéns! Você errou :joy:
Tente novamente daqui a pouco
$changeNickname[$authorID;[Burro] - $username]

$endelseIf
$endif
$cooldown[5m;<@$authorID> | Espere **%time%** para adivinhar novamente!]
`
}
