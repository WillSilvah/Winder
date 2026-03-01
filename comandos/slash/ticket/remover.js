module.exports = {
  code: `
$onlyIf[$isTicket[$channelID]==true;<@$authorID> | Você precisa estar em um ticket para utilizar esse comando.]
$timezone[America/Recife]

$let[userID;$option[user]]

$!modifyChannelPerms[$channelID;$get[userID];-ViewChannel;-SendMessages]

$appendFile[Recursos/ticket-logs/ticket-$userTag[$authorID].txt;[$hour:$minute:$second] $userTag[$clientID]: $userTag[$get[userID]] foi removido por $userTag[$authorID]!
;utf8]

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
