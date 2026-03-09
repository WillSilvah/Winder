module.exports = {
  code: `
$!memberRemoveRoles[$guildID;$option[user];$option[cargo]]
$interactionReply[Cargo $inlineCode[$roleName[$guildID;$option[cargo]]] removido de $bold[$username[$option[user]]]!]
  `,
data: {
  "description": "Remove um cargo em um membro",
  "options": [
    {
      "type": 6,
      "description": "Usuário a perder o cargo",
      "required": true,
      "name": "user"
    },
    {
      "type": 8,
      "description": "Cargo a retirar",
      "name": "cargo",
      "required": true
    }
  ],
  "default_member_permissions": "268435456",
  "name": "remover"
},
}