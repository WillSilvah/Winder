module.exports = {
 name: "$alwaysExecute",
$if: "v4",
 code: `
 $setUserVar[mensagens;$sum[$getUserVar[mensagens];1]]
 $setUserVar[totalmensagens;$sum[$getUserVar[mensagens];1]]

 $setUserVar[mensagens2;$hour:$minute:$second - $day/$month/$year]
 $setUserVar[mensagens1;$message]
 $setUserVar[mensagens3;<#$channelID>]
 $setServerVar[allmensagens;$sum[$getServerVar[allmensagens];1]]
$timezone[America/Recife]

$if[$gerUserVar[mensagens]==1000]
**$username** | enviou 1,000 mensagens!

$elseIf[$getUserVar[mensagens]==2000]
**$username** | enviou 2,000 mensagens!

$elseIf[$getUserVar[mensagens]==3000]
**$username** | enviou 3,000 mensagens

$elseIf[$getUserVar[mensagens]==4000]
**$username** | enviou 4,000 mensagens

$elseIf[$getUserVar[mensagens]==5000]
**$username** | enviou 5,000 mensagens

$elseIf[$getUserVar[mensagens]==6000]
**$username** | enviou 6,000 mensagens

$elseIf[$getUserVar[mensagens]==7000]
**$username** | enviou 7,000 mensagens

$elseIf[$getUserVar[mensagens]==8000]
**$username** | enviou 8,000 mensagens

$elseIf[$getUserVar[mensagens]==9000]
**$username** | enviou 9,000 mensagens

$elseIf[$getUserVar[mensagens]==10000]
**$username** | enviou 10,000 mensagens

$endelseIf
$endIf
`
} 
