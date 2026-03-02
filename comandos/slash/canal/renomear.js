module.exports = {
  code: `
$let[channelID;$option[canal]]
$let[name;$option[nome]]
  
$!setChannelName[$get[channelID];$replaceText[$get[name];|;│]]

$interactionReply[<@$authorID> | Canal renomeado!]
  `,
data: {
  "type": 1,
  "name": "renomear",
  "description": "Renomeie o nome de um canal",
  "default_member_permissions": "16",
  "options": [
    {
      "type": 7,
      "description": "Canal",
      "required": true,
      "name": "canal"
    },
    {
      "type": 3,
      "description": "Novo nome.",
      "name": "nome",
      "required": true
    }
  ]
},
}
