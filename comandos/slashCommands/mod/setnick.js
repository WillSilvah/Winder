module.exports = {
  code: `
  $defer
  $let[userID;$option[membro]]
  $let[nick;$option[novo-apelido]]
  $!memberSetNickname[$guildID;$get[userID];$get[nick]]
  $interactionReply[Nome de **@$userTag[$get[nick]]** foi alterado com sucesso!]
  `,
data: {
  "type": 1,
  "name": "setnick",
  "description": "altere o apelido de algum membro",
  "options": [
    {
      "type": 6,
      "name": "membro",
      "description": "ID, @username",
      "required": true
    },
    {
      "name": "novo-apelido",
      "type": 3,
      "description": "Apelido a ser colocado, deixe em branco para remover."
    }
  ]
},
}
