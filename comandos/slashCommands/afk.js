module.exports = {
  code: `
$setUserVar[afkReason;$option[motivo]]
$setUserVar[afkStatus;true]
$setUserVar[afkNotify;$if[$option[notificardm]==;false;$option[notificardm]]]

$!memberSetNickname[$guildID;$authorID;(AFK) $nickname[$guildID;$authorID]]

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
      "type": 3,
      "description": "Deseja que o Winder envie menções recebidas na DM?",
      "name": "notificardm",
      "choices": [
        {
          "value": "true",
          "name": "Avisar menções na DM"
        },
        {
          "name": "Não avisar menções na DM",
          "value": "false"
        }
      ]
    }
  ]
},
}