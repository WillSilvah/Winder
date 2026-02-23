module.exports = {
  code: `
$let[userID;$findUser[$option[user]]]
$let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
$let[staffID;$authorID]
$let[type;banido]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$ban[$guildID;$get[userID];$get[reason];0]

$interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]

  `,
data: {
  "type": 1,
  "name": "banir",
  "description": "Bana um membro permanentemente.",
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