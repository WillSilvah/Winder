module.exports = {
 name: "$alwaysExecute",
 code: `
  $reply
 $setUserVar[cataventos;$sum[$getUserVar[cataventos];1]]
  $argsCheck[>2;]
  $onlyIf[$randomText[no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;yes]==yes;]
  <@$authorID> | Sua mensagem foi tão incrível que você ganhou um catavento! Você tem **$sum[$getUserVar[cataventos];1]** cataventos!
`
}
