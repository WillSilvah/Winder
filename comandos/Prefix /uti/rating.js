module.exports = {
 name: "$alwaysExecute",
 code: `$reply
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]
$onlyIf[$randomText[no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;yes]==yes;]
<@$authorID> | Sua mensagem foi tão incrível que você ganhou um catavento! Você tem **$sum[$getUserVar[cataventos];1]** cataventos!

$channelSendMessage[945355607421095936;<@$authorID> {newEmbed:$getUserVar[nickname] enviou uma mensagem incrível!} {description:$message} {footer:$username#$discriminator enviou $getUserVar[mensagens]}  }]
`
}
