module.exports = [{
    name: "cargos",
    type: "clientReady",
    code: `$deleteMessage[1470875996356874292;$getGlobalVar[cargos_messageID]]
$let[msgID;$sendMessage[1470875996356874292;$disableAllMentions
$addTextDisplay[## 🔔 NOTIFICAÇÕES!
⭐ 🎉 🎮 🔕
O que você quer receber na Patinhas?

]
$addActionRow
$addStringSelectMenu[notificar;Escolha uma notificação para receber;false;1;1]
$addOption[Receber tudo da Patinhas;Você será notificado de tudo que e possível;all;🔔;false]
$addOption[Receber notificação de coisas novas para a comunidade;Seja notificado quando acontecer algo novo na comunidade e ficar ligado em tudo.;novidades;⭐;false]
$addOption[Participar de sorteios e de eventos;Seja notificado quando acontecer um sorteio ou um evento!;eventos;🎉;false]
$addOption[Receber avisos sobre os minigames;Seja notificado sobre alterações no Winder Minigames;minigame;🎮;false]
$if[1==2;$addOption[Lives de streamers parceiros;Receba uma notificação de quando um parceiro fazer uma live! #VimDaPatinhas!;lives;🔴;false]]
$addOption[Não quero receber notificações;Remove todos os cargos de notificação escolhidas.;remove;🔕;false]

;true]]

$setGlobalVar[cargos_messageID;$get[msgID]]
`
},{
    type: "interactionCreate",
    name: "notificar",
    code: `$ephemeral $disableAllMentions
$jsonLoad[notificar;{
  "novidades": "1463138741441790014",
  "eventos": "1463139182313738412",
  "minigame": "1463139788650582180",
  "lives": "1464053142286106684"
}

]
$ifx[
$if[$selectMenuValues==remove;
$arrayLoad[notificarID;,;$jsonValues[notificar;,]]

$arrayForEach[notificarID;id;
$!memberRemoveRoles[$guildID;$authorID;$env[id]]
]

$interactionReply[Pronto! Você não receberá notificações especificas da patinhas 😪, mas não vai deixar de receber menções de @everyone, que são guardadas para avisos e alertas importantes. Podendo claro, silenciar nas configurações do seu Discord.]
]
$elseIf[$selectMenuValues==all;
$arrayLoad[notificarID;,;$jsonValues[notificar;,]]

$arrayForEach[notificarID;id;
$!memberAddRoles[$guildID;$authorID;$env[id]]
]

$interactionReply[Pronto! Você preferiu receber todas as notificações importantes da Patinhas, fique antenado!]
]
$else[
$!memberAddRoles[$guildID;$authorID;$env[notificar;$selectMenuValues]]

$interactionReply[Pronto! Você está recebendo notificações referente ao cargo <@&$env[notificar;$selectMenuValues]>!
]
]
]
    
`
}]