module.exports = {
  code: `
$onlyIf[$isTicket==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$let[userID;$option[user]]

$!modifyChannelPerms[$channelID;$get[userID];-ViewChannel;-SendMessages]

$setChannelVar[messageLogTicket;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit] -> $userTag[$clientID] ($clientID): $userTag ($authorID) removeu $userTag[$get[userID]] ($get[userID]) do ticket!\n$getChannelVar[messageLogToday]]

$interactionReply[<@$authorID> | **$username[$get[userID]]** removido!]
  `,
data: {
  "type": 1,
  "description": "Remova um membro de um ticket.",
  "name": "remover",
  "options": [
    {
      "name": "user",
      "type": 6,
      "description": "Usuário a ser removido",
      "required": true
    }
  ]
},
}
