module.exports = {
  code: `
$onlyIf[$isTicket==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$let[userID;$option[user]]

$!modifyChannelPerms[$channelID;$get[userID];+ViewChannel;+SendMessages]

$setChannelVar[messageLogToday;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit] -> $userTag[$clientID] ($clientID): $userTag ($authorID) adicionou $userTag[$get[userID]] ($get[userID]) ao ticket!\n$getChannelVar[messageLogToday]]

$interactionReply[<@$authorID> | **$username[$get[userID]]** adicionado!]
  `,
data: {
  "type": 1,
  "description": "Adicione um membro em um ticket.",
  "name": "adicionar",
  "options": [
    {
      "name": "user",
      "type": 6,
      "description": "Usuário a ser adicionado",
      "required": true
    }
  ]
},
}
