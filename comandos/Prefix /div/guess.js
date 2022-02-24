module.exports = {
name: "guessnumber",
$if: "v4",
code: `$botTyping
$if[$getServerVar[guess]==$message[1]]
$reply $botTyping
<@$authorID> | Parabéns! Foi o número **$message[1]** que eu estava pensando mesmo! Você ganhou um catavento
$addCmdReactions[<:pinw_branco:945614522385825862>]
$setServerVar[guess;$random[1;20]]
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]

$elseIf[$getServerVar[guess]!=$message[1]]
$reply $botTyping
<@$authorID> | Eu não pensei no número **$message[1]**, tente novamente daqui a 30 segundos!

$endelseIf
$endif
$cooldown[30s;<@$authorID> | Espere **%time%** para adivinhar novamente!]
`
}
