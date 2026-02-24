module.exports = {
  code: `
$ephemeral
$onlyIf[$hasAnyRole[$guildID;$authorID;$getGuildVar[memberOfficialArtistRole];$getGuildVar[allStaffRole]]==true;<@$authorID> Você não tem permissão para isso.]
$setGuildVar[sabartTheme;$option[tema]]
$setGuildVar[sabartDescription;$option[descricao]]

$interactionReply[
<@$authorID> O tema do **sabarte** essa semana será...
$description[
# #toUppercase[$getGuildVar[sabartTheme]]
**$getGuildVar[sabartDescription]**
]
$color[Yellow]
]

  `,
data: {
  "type": 1,
  "description": "Gerencie o evento artístico SABARTE da comunidade.",
  "name": "sabarte",
  "options": [
    {
      "type": 3,
      "description": "Tema do Sabarte da semana",
      "name": "tema",
      "required": true
    },
    {
      "type": 3,
      "description": "Descrição do tema do Sabarte da semana",
      "name": "descricao",
      "required": true
    }
  ]
},
}
