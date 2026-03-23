module.exports = {
  code: `
    $let[userID;$findUser[$option[user]]]
    $let[reason;$if[$option[motivo]==;Sei lá qual foi o motivo, só sei que recebeu!;$option[motivo]]]
    $let[staffID;$authorID]
     $if[$hasRoles[$guildID;$get[userID];$getGuildVar[memberIsolatedRole]]==false;
      $let[type;adicionado ao isolamento];
      $let[type;retirado do isolamento]
     ]
     $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

    $interactionReply[<@$authorID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]

    $isolar[$get[userID]]
  `,
data: {
  "type": 1,
  "name": "isolar",
  "description": "Isole um membro de acessar os canais e funções da Comunidade",
  "options": [
    {
      "type": 6,
      "description": "Usuário a ser punido",
      "name": "user",
      "required": true
    },
    {
      "type": 3,
      "description": "Motivo da punição",
      "name": "motivo"
    }
  ],
  "default_member_permissions": "2"
},
}
