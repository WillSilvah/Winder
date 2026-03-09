module.exports = {
  code: `
  $let[guildID;$if[$option[serverid]==;$guildID;$option[serverid]]]
$attachment[$guildIcon[$get[guildID];;png];winder-guild-icon.png;false]
  `,
data: {
  "name": "icone",
  "description": "Veja o ícone de um servidor",
  "description_localizations": {
    "en-GB": "See the server icon",
    "en-US": "See the server icon",
    "es-419": "Ver el icono del servidor",
    "pt-BR": "Veja o ícone do servidor"
  },
  "name_localizations": {
    "en-GB": "icons",
    "en-US": "icons",
    "es-ES": "iconos"
  },
  "options": [
    {
      "type": 3,
      "description": "ID do servidor",
      "name": "serverid",
      "description_localizations": {
        "en-US": "ID do servidor",
        "es-419": "ID del servidor",
        "pt-BR": "ID do servidor"
      }
    }
  ]
},
}