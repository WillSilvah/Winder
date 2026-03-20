module.exports = {
  code: `
  $let[userID;$option[user]]
  $let[msg;$option[mensagem]]
  
  $interactionReply[<@$authorID> Mensagem enviada!]
  
  $sendDM[$get[userID];
   $addContainer[
    $addSection[
     $addTextDisplay[### W-MAIL: NOVA MENSAGEM!\n-# **Enviada por: Equipe Patinhas**]
     $addTextDisplay[$get[msg]]
     $addThumbnail[$getGuildVar[logo_orangeLight;$guildID]]
     ]
   ;Orange]
   $addButton[ticket;Criar um ticket;Primary;👋;false]
   
   
  ]
  `,
data: {
  "type": 1,
  "description": "Envie um aviso diretamente na mensagem de um membro.",
  "name": "mail",
  "default_member_permissions": "8",
  "options": [
    {
      "type": 6,
      "description": "Usuário a receber o modmail",
      "name": "user",
      "required": true
    },
    {
      "type": 3,
      "description": "Mensagem a ser enviada.",
      "name": "mensagem",
      "required": true
    }
  ]
},

}