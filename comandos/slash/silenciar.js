module.exports = {
  code: `
$let[userID;$findUser[$option[user]]]
$let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
$let[staffID;$authorID]
$let[type;silenciado]
$let[time;$option[tempo]]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];$replace[$option[tempo]; ;]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];$replace[$option[tempo]; ;]]

$!timeout[$guildID;$get[userID];$get[time];$get[reason]]

$interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]
  `,
data: {
  "type": 1,
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
      "description": "Tempo de silêncio. Exemplo: 6h, 12h, 6d",
      "name": "tempo",
      "required": true
    },
    {
      "type": 3,
      "description": "Motivo do usuário a ser punido",
      "name": "motivo"
    }
  ],
  "description": "Silencie um membro.",
  "name": "silenciar"
},
}