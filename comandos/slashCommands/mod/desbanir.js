module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
    $let[staffID;$authorID]
    $let[type;desbanido]
    $winderUnban
    $interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]

  `,
data: {
  "type": 1,
  "name": "unban",
  "description": "Desbana um membro.",
  "default_member_permissions": "4",
  "options": [
    {
      "type": 6,
      "description": "ID, menção ou nome de usuário ",
      "name": "user",
      "required": true
    },
    {
      "type": 3,
      "description": "Motivo do usuário a ser punido",
      "name": "motivo"
    }
  ]
},
}
