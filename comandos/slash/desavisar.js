module.exports = {
  code: `
$let[userID;$findUser[$option[user]]]
$let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
$let[staffID;$authorID]
$let[type;desavisado]

$onlyIf[$getMemberVar[warnsTotal;$findUser[$get[userID]];$guildID;0]>0;<@$authorID> O usuário não tem nenhuma advertência.]

$deleteFile[Recursos/avisos/$guildID/$findUser[$get[userID]]/aviso_$getMemberVar[warnsTotal;$findUser[$get[userID]];$guildID;0].txt]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$setMemberVar[warnsTotal;$sub[$getMemberVar[warnsTotal;$findUser[$get[userID]];$guildID;0];1];$findUser[$get[userID]];$guildID]

$interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]

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
