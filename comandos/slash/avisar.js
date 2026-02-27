module.exports = {
  code: `
$let[userID;$findUser[$option[user]]]
$let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
$let[staffID;$authorID]
$let[type;advertido]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$setMemberVar[lastWarn;{"staffID": "$findUser[$get[staffID]]","reason": "$get[reason]"};$findUser[$get[userID]]]
$setMemberVar[warnsTotal;$sum[$getMemberVar[warnsTotal;$findUser[$get[userID]];$guildID;0];1];$findUser[$get[userID]]]

$writeFile[Recursos/avisos/$guildID/$findUser[$get[userID]]/aviso_$getMemberVar[warnsTotal;$findUser[$get[userID]];$guildID;0].txt;{
"staffID": "$get[staffID]", 
"motivo": "$get[reason]"
};utf8]

$interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]

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
