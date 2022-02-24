module.exports = {
name: "guessnumber",
aliases: ['adivinharnumero','guessthenumber','gtn',],
$if: "v4",
code: `$botTyping
$if[$message[1]!=]
<@$authorID> | Adivinhe qual número estou pensando!
$author[1;Como funciona?]
$description[1;
A cada 1 hora, eu atualizo uma variável colocando um número aleátorio de 1 até 20 e este mesmo número é igual a todos deste servidor.
Os membros deverão pensar qual número estou pensando naquele momento, quando alguém acertar, eu irei sortear outro número e a brincadeira continua!
> **__Você ganha 1 catavento cada vez que acerta :)__**
]
$footer[1;$getServerVar[prefixo]$randomText[guessnumber;adivinharnumero;guessthenumber;gtn] $random[1;20] | EXEMPLO]

$elseIf[$getServerVar[guess]==$message[1]]
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
