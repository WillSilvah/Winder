module.exports = {
 name: "$alwaysExecute",
 code: `
 $setUserVar[mensagens;$sum[$getUserVar[mensagens];1]]
 $setUserVar[mensagens2;$hour:$minute:$second - $day/$month/$year]
 $setUserVar[mensagens1;$message]
 $setUserVar[mensagens3;<#$channelID>]
 $setServerVar[allmensagens;$sum[$getServerVar[allmensagens];1]]
$timezone[America/Recife]
$cooldown[2s;]
`
} 
