module.exports = {
  code: `
$setUserVar[afkReason;$if[$option[motivo]==;Eu não sei o motivo, mas ele não está disponível;$option[motivo]]]
$setUserVar[afkStatus;true]
$setUserVar[afkNotify;$if[$option[notificardm]==;false;$option[notificardm]]]

$interactionReply[<@$authorID> Modo AFK ativado!
> $bold[$if[$option[notificardm]==;Não irei avisar as menções na DM.;Irei avisar as menções nas DM!]]
]
  `,
data: {
  "type": 1,
  "description": "Ative o modo afk para que os outros sejam avisados ao mencionar você.",
  "name": "afk",
  "options": [
    {
      "type": 3,
      "description": "Motivo que você vai ficar AFK.",
      "name": "motivo"
    },
    {
      "type": 5,
      "description": "Deseja que o Winder envie menções recebidas na DM?",
      "name": "notificardm"
    }
  ]
},
}