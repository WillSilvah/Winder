module.exports = {
  code: `
    $let[channelID;$createChannel[$guildID;$replaceText[$option[nome];|;│];$option[tipo];;$option[categoria-id]]]
    
    $interactionReply[Canal criado! <#$get[channelID]>]
  `,
data: {
  "type": 1,
  "name": "criar",
  "description": "Crie um canal",
  "options": [
    {
      "type": 3,
      "description": "Tipo do canal",
      "name": "tipo",
      "required": true,
      "choices": [
        {
          "name": "Texto",
          "value": "GuildText"
        },
        {
          "name": "Voz",
          "value": "GuildVoice"
        },
        {
          "value": "GuildStageVoice",
          "name": "Palco"
        },
        {
          "name": "Fórum",
          "value": "GuildForum"
        },
        {
          "value": "GuildNews",
          "name": "Anúncios"
        }
      ]
    },
    {
      "type": 3,
      "description": "nome do canal",
      "required": true,
      "name": "nome"
    },
    {
      "type": 3,
      "name": "categoria-id",
      "required": true,
      "description": "ID da categoria"
    }
  ],
  "default_member_permissions": "16"
},
}
