module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$default[$option[motivo];Sei lá qual foi o motivo, só sei que recebeu!]]
    $let[staffID;$authorID]
    $let[guild;$guildID]
    $let[type;advertido]

      $sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
      $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    

    $let[memberWarns;$getMemberVar[warns;$get[userID];$get[guild];1]]
    
    $jsonLoad[avisos;$getMemberVar[warnList;$get[userID];$get[guild];{}]]
    $jsonLoad[warn;{
      "staffID": "$get[staffID]",
      "reason": "$get[reason]", 
      "timestamp": "$getTimestamp"
    }]

    $!jsonSet[avisos;$get[memberWarns];$env[warn]]
    $setMemberVar[warnList;$env[avisos];$get[userID];$get[guild]]
      
    $letSum[memberWarns;1]
    $setMemberVar[warns;$get[memberWarns];$get[userID];$get[guild]]

    $interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
  `,
  data: {
    "type": 1,
    "name": "avisar",
    "description": "Aplique uma advertência em um membro",
    "default_member_permissions": "4",
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
