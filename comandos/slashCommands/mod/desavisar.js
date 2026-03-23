module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
    $let[staffID;$authorID]
    $let[type;desavisado]
    $onlyIf[$getMemberVar[warnList;$get[userID]]!={};<@$authorID> O **@$userTag[$get[userID]]** não tem nenhum aviso.]
    $winderUnwarn
    $interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]

  `,
data: {
  "type": 1,
  "name": "desavisar",
  "description": "Remova a última advertência de um membro",
  "default_member_permissions": "2",
  "options": [
    {
      "type": 6,
      "description": "ID, menção ou nome de usuário",
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
