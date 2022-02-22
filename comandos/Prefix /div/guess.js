module.exports = {
name: "guessnumber",
$if: "v4",
code: `$botTyping
$argsCheck[>1;<@$authorID> | É pra você adivinhar o número que eu estou pensando, não eu adivinhar o que você está pensando. **$getUserVar[prefixo]guessnumber**]
$if[$getServerVar[guess]==$message[1]]
$reply $botTyping
<@$authorID> | Parabéns! Você adivinhou o número que estava pensando!
Você ganhou um catavento!
$setServerVar[guess;$random[1;20]]
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]

$elseIf[$getServerVar[guess]!=$message[1]]
$reply $botTyping
<@$authorID> | Parabéns! Você errou :joy:
Tente novamente daqui a pouco

$endelseIf
$endif
$cooldown[1m;<@$authorID> | Espere **%time%** para adivinhar novamente!]
`
}
