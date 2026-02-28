module.exports = {
  code: `
$onlyIf[$isTicket[$channelID]==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$!modifyChannelPerms[$channelID;$guildID;-SendMessages]

$interactionReply[Ticket fechado!]

$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;
[$hour:$minute:$second] $userTag ($authorID) fechou o ticket.
;utf8]
$wait[1s]

$sendMessage[$getGuildVar[ticketlogs];
$attachment[Recursos/ticket-logs/$channelName[$channelID].txt;/$channelName[$channelID].txt;false;utf8;]
$author[$channelName[$channelID].txt]
$color[Orange]
]

$wait[1s]
$deleteChannels[$channelID]
$deleteFile[Recursos/ticket-logs/$channelName[$channelID].txt]
  `,
data: {
  "type": 1,
  "description": "Feche um ticket.",
  "name": "fechar"
},
}
