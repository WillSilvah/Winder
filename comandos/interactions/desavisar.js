module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
    $let[staffID;$authorID]
    $let[type;desavisado]
    
    $onlyIf[$getMemberVar[warns;$get[userID]]!=;<@$authorID> O **@$userTag** não tem nenhum aviso.]

    $let[memberWarns;$getMemberVar[warns;$get[userID];$get[guild];1]]
    
    $jsonLoad[avisos;$getMemberVar[warnList;$get[userID];$get[guild];{}]]

    $!jsonDelete[avisos;$get[memberWarns]]
    $setMemberVar[warnList;$env[avisos];$get[userID];$get[guild]]
      
    $letSub[memberWarns;1]
    $setMemberVar[warns;$get[memberWarns];$get[userID];$get[guild]]

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
