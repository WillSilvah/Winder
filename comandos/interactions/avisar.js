module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
    $let[staffID;$authorID]
    $let[type;advertido]

    $if[11==222;
    $sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    ]
    
    $jsonLoad[avisos;$getMemberVar[warnList;$get[userID];$guildID;{}]]
     $!jsonSet[avisos;$getMemberVar[warns;$get[userID];$guildID;1];{"staffID":"$get[staffID]","reason": "$get[reason]"}]
      $setMemberVar[warnList;$env[avisos];$get[userID];$guildID]
      
    $setMemberVar[warns;$math[$getMemberVar[warns;$get[userID];$guildID;0]+1];$get[userID];$guildID]

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
