module.exports = {
 name: "$alwaysExecute",
 code: `$reply
$setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]
$if[$randomText[no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;yes]==yes]
<@$authorID> | Sua mensagem foi tão incrível que você ganhou um catavento! Você tem **$sum[$getUserVar[cataventos];1]** cataventos!
> **__Veja ela e outras mensagens incríveis em <#945355607421095936>__**

$channelSendMessage[945355607421095936;<@$authorID> {newEmbed:$getUserVar[nickname] enviou uma mensagem incrível!} {description:$message} {footer:$username#$discriminator enviou $getUserVar[mensagens]}  }]
$endIf
`
}
