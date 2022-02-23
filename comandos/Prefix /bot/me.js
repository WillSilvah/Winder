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
`
} 
