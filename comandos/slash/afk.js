module.exports = {
  code: `
$setUserVar[afkReason;$if[$option[motivo]==;Eu não sei o motivo, mas ele não está disponível;$option[motivo]]]
$setUserVar[afkStatus;true]
$setUserVar[afkNotify;$if[$option[notificardm]==;false;$option[notificardm]]]

$interactionReply[<@$authorID> Modo AFK ativado!
> $bold[$if[$option[notificardm]==;Não irei avisar as menções na DM.;Irei avisar as menções nas DM!]]
]
  `,
data: ,
}