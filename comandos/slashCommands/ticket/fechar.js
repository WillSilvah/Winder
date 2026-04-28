module.exports = {
  code: `
$onlyIf[$isTicket==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$interactionReply[Ticket fechado!]

$!modifyChannelPerms[$channelID;$guildID;-SendMessages]

$setChannelVar[messageLogToday;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit] -> $userTag[$clientID] ($clientID): $userTag ($authorID) fechou o ticket!\n$getChannelVar[messageLogToday]]

$sendMessage[$getGuildVar[ticketLogs];
$attachment[$getChannelVar[messageLogToday];$channelName[$channelID].txt;true]
$author[$channelName[$channelID].txt]
$color[Orange]
]

$#deleteFile[Recursos/ticket-logs/$guildID/$channelName[$channelID].txt]
$wait[2s]
$deleteChannels[$channelID]

  `,
data: {
  "type": 1,
  "description": "Feche um ticket.",
  "name": "fechar"
},
}
