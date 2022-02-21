module.exports = {
 name: "$alwaysExecute",
 code: `$reply
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]
$onlyIf[$randomText[no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;yes]==yes;]
$cooldown[5s;]
<@$authorID> | Sua mensagem foi tão incrível que você ganhou um catavento! Você tem **$sum[$getUserVar[cataventos];1]** cataventos!
`
}
