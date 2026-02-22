module.exports = {
  code: `
$let[userID;$findUser[$option[user]]]
$let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
$let[staffID;$authorID]
$let[type;desilenciado]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type]]

$!timeout[$guildID;$get[userID];0;$get[reason]]

$interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]
  `,
data: {
  "type": 1,
  "default_member_permissions": "2",
  "options": [
    {
      "type": 3,
      "description": "ID, menção ou nome de usuário",
      "name": "user",
      "required": true
    },
    {
      "type": 3,
      "description": "Motivo do usuário a ser punido",
      "name": "motivo"
    }
  ],
  "description": "Desilencie um membro.",
  "name": "desilenciar"
},
}