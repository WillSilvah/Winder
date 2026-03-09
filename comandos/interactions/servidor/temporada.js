module.exports = {
  code: `
$ephemeral

$setGuildVar[sessionName;$option[nome]]
$setGuildVar[sessionNumber;$option[number]]

$interactionReply[
<@$authorID> O nome da próxima temporada será:
$description[
# T$getGuildVar[sessionNumber]: $toUppercase[$getGuildVar[sessionName]]
]
$color[Green]
]

  `,
data: {
  "type": 1,
  "description": "Configure a próxima temporada do servidor",
  "name": "temporada",
  "default_member_permissions": "32",
  "options": [
    {
      "type": 3,
      "description": "Nome da temporada",
      "name": "nome",
      "required": true
    },
    {
      "type": 4,
      "name": "number",
      "description": "Numero da temporada",
      "required": true
    }
  ]
},
}
