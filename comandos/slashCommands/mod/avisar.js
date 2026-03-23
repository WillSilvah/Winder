module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$default[$option[motivo];Sei lá qual foi o motivo, só sei que recebeu!]]
    $let[staffID;$authorID]
    $let[guild;$guildID]
    $let[type;advertido]
    $sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $winderWarn
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
