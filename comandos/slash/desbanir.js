module.exports = {
  code: `
$let[userID;$findUser[$option[user]]]
$let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
$let[staffID;$authorID]
$let[type;desbanido]

$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$unban[$guildID;$get[userID];$get[reason];0]

$interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!
> $bold[$get[reason]]]

  `,
data: {
  "type": 1,
  "name": "ban",
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
