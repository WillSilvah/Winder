module.exports = {
  code: `
$let[user;$if[$option[user]==;$authorID;$option[user]]]
$attachment[$userAvatar[$get[user];2048];$username[$get[user]]-avatar.$if[$includes[$userAvatar[$get[user]];gif]==true;gif;png];;false]
  `,
data: {
  "name": "avatar",
  "description": "Veja o avatar de um usuário",
  "description_localizations": {
    "en-US": "View a user's avatar",
    "es-419": "Ver el avatar de un usuario",
    "pt-BR": "Veja o avatar de um usuário"
  },
  "options": [
    {
      "type": 6,
      "description": "O usuário que deseja ver o avatar!",
      "name": "user",
      "description_localizations": {
        "en-US": "The user who wants to see the avatar!",
        "es-419": "¡El usuario que quiere ver el avatar!",
        "pt-BR": "O usuário que deseja ver o avatar!"
      }
    }
  ]
},
}