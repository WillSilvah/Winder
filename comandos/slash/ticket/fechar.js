module.exports = {
  code: `
$onlyIf[$isTicket==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$interactionReply[Ticket fechado!]

$!modifyChannelPerms[$channelID;$guildID;-SendMessages]

$appendFile[Recursos/ticket-logs/$guildID/$channelName[$channelID].txt;
$hour:$minute:$second $userTag ($authorID) fechou o ticket.]

$sendMessage[$getGuildVar[ticketLogs];
$attachment[Recursos/ticket-logs/$guildID/$channelName[$channelID].txt;/$channelName[$channelID].txt;false;utf8;]
$author[$channelName[$channelID].txt]
$color[Orange]
]

$deleteFile[Recursos/ticket-logs/$guildID/$channelName[$channelID].txt]
$wait[2s]
$deleteChannels[$channelID]

  `,
data: {
  "type": 1,
  "description": "Feche um ticket.",
  "name": "fechar"
},
}
