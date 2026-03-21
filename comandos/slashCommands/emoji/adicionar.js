module.exports = {
  code: `
  $let[url;$default[$option[url];$option[anexo]]]
  $let[nome;$option[nome]]
  $let[emojiID;$addEmoji[$guildID;$get[nome];$get[url];true]]
  
   $interactionReply[Emoji $emoji[$get[emojiID]] adicionado!]
  `,
data: {
  "type": 1,
  "name": "adicionar",
  "description": "Adicione um emoji",
  "default_member_permissions": "16",
  "options": [
    {
      "type": 3,
      "description": "Nome do emoji",
      "name": "nome",
      "required": true
    },
    {
      "type": 11,
      "description": "Anexe o emoji que queira adicionar",
      "name": "anexo"
    },
    {
      "type": 3,
      "description": "URL da imagem",
      "name": "url"
    }
  ]
},
}