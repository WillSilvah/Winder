module.exports = {
  code: `
$!memberAddRoles[$guildID;$option[user];$option[cargo]]
$interactionReply[Cargo $inlineCode[$roleName[$guildID;$option[cargo]]] dado ao $bold[$username[$option[user]]]!]
  `,
data: {
  "name": "adicionar",
  "description": "Adicione um cargo em um membro",
  "options": [
    {
      "type": 6,
      "description": "Usuário a receber o cargo",
      "required": true,
      "name": "user"
    },
    {
      "type": 8,
      "description": "Cargo a entregar",
      "name": "cargo",
      "required": true
    }
  ],
  "default_member_permissions": "268435456"
},
}