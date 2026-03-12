module.exports = [{
    name: "cargos",
    type: "clientReady",
    code: `
    $deleteMessage[1470875996356874292;$getGlobalVar[notificar_messageID]]
    
    $let[msgID;$sendMessage[1470875996356874292;
    $disableAllMentions
    
    $addContainer[
    $addSection[
    $addTextDisplay[## NOTIFICAÇÕES!
⭐ 🎉 🎮 🔕

O que você quer receber na Patinhas?
]
    $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f514.png]
]
;Red]

    $addActionRow
    $addStringSelectMenu[notificar;Escolha uma notificação para receber;false;1;1]
    $addOption[Receber tudo da Patinhas;Você será notificado de tudo que e possível;all;🔔;false]
    $addOption[Receber notificação de coisas novas para a comunidade;Seja notificado quando acontecer algo novo na comunidade e ficar ligado em tudo.;novidades;⭐;false]
    
    $addOption[Participar de sorteios e de eventos;Seja notificado quando acontecer um sorteio ou um evento!;eventos;🎉;false]
    
    $addOption[Receber avisos sobre os minigames;Seja notificado sobre alterações no Winder Minigames;minigame;🎮;false]
    
    $if[1==2;$addOption[Lives de streamers parceiros;Receba uma notificação de quando um parceiro fazer uma live! #VimDaPatinhas!;lives;🔴;false]]
    
    $addOption[Não quero receber notificações;Remove todos os cargos de notificação escolhidas.;remove;🔕;false]

;true]]

    $setGlobalVar[notificar_messageID;$get[msgID]]
`
},{
    type: "interactionCreate",
    name: "notificar",
    code: `
    $ephemeral $disableAllMentions

    $jsonLoad[notificar;{
  "novidades": "1463138741441790014",
  "eventos": "1463139182313738412",
  "minigame": "1463139788650582180",
  "lives": "1464053142286106684"
}
]

    $arrayLoad[notificarID;,;$jsonValues[notificar;,]]

    $ifx[
     $if[$selectMenuValues==remove;
     $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você não receberá notificações especificas da patinhas 😪, mas não vai deixar de receber menções de @everyone, que são guardadas para avisos e alertas importantes. Podendo claro, silenciar nas configurações do seu Discord.]
      $arrayForEach[notificarID;id;
      $!memberRemoveRoles[$guildID;$authorID;$env[id]]
      ]
     ]
     $elseIf[$selectMenuValues==all;
      $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você preferiu receber todas as notificações importantes da Patinhas, fique antenado!]
      $arrayForEach[notificarID;id;
      $!memberAddRoles[$guildID;$authorID;$env[id]]
      ]
     ]
     $else[
      $if[$hasRoles[$guildID;$authorID;$env[notificar;$selectMenuValues]]==false;
       $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você está recebendo notificações referente ao cargo <@&$env[notificar;$selectMenuValues]>!]
      $!memberAddRoles[$guildID;$authorID;$env[notificar;$selectMenuValues]]
    ;
    $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você não tem mais o cargo <@&$env[notificar;$selectMenuValues]>!]
    $!memberRemoveRoles[$guildID;$authorID;$env[notificar;$selectMenuValues]]
     ]
    ]
    ]
    
`
}]