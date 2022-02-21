module.exports = {
name: "adivinharnúmero",
aliases: ['guessnumber', 'guessthenumber','adivinharnumero'],
code: `$botTyping
$reply
<@$authorID> | Atualize sua pinwheel para a versão **$getVar[versão]** para poder usar este comando!
$cooldown[5m;<@$authorID> | Espere **%time%** para executar este comando de novo, enquanto isso, pense qual número irei pensar na próxima!]
`
}
