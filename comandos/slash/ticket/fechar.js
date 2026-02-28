module.exports = {
  code: `
$onlyIf[$isTicket[$channelID]==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$interactionReply[Ticket fechado!]

$!modifyChannelPerms[$channelID;$guildID;-SendMessages]

$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;
[$hour:$minute:$second] $userTag ($authorID) fechou o ticket.
;utf8]

$sendMessage[$getGuildVar[ticketLogs];
$attachment[Recursos/ticket-logs/$channelName[$channelID].txt;/$channelName[$channelID].txt;false;utf8;]
$author[$channelName[$channelID].txt]
$color[Orange]
]

$deleteChannels[$channelID]
$deleteFile[Recursos/ticket-logs/$channelName[$channelID].txt]

  `,
data: {
  "type": 1,
  "description": "Feche um ticket.",
  "name": "fechar"
},
}
