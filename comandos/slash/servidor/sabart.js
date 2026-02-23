module.exports = {
  code: `
$onlyIf[$hasAnyRole[$guildID;$authorID;$getGuildVar[memberOfficialArtistRole];$getGuildVar[allStaffRole]]==true;<@$authorID> Você não tem permissão para isso.]

$setGuildVar[sabartTheme;$option[tema]]
$setGuildVar[sabartDescription;$option[descricao]]

$interactionReply[
<@$authorID> O tema do **sabart** essa semana será...
$description[
# $getGuildVar[sabartTheme]
**$getGuildVar[sabartDescription]**
]
$color[Yellow]
]

  `,
data: {
  "type": 1,
  "description": "Gerencie o evento artístico SABART da comunidade.",
  "name": "sabart",
  "options": [
    {
      "type": 3,
      "description": "Tema do sabart da semana",
      "name": "tema",
      "required": true
    },
    {
      "type": 3,
      "description": "Descrição do tema do Sabart da semana",
      "name": "descricao",
      "required": true
    }
  ]
},
}