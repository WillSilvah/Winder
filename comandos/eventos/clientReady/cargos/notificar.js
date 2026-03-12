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
    $addStringSelectMenu[notificar;Escolha uma notificação para receber;false;1;3]
    $addOption[Receber notificação de coisas novas para a comunidade;Seja notificado quando acontecer algo novo na comunidade e ficar ligado em tudo.;novidades;⭐;false]
    
    $addOption[Participar de sorteios e de eventos;Seja notificado quando acontecer um sorteio ou um evento!;eventos;🎉;false]
    
    $addOption[Receber avisos sobre os minigames;Seja notificado sobre alterações no Winder Minigames;minigame;🎮;false]
    
    $if[1==2;$addOption[Lives de streamers parceiros;Receba uma notificação de quando um parceiro fazer uma live! #VimDaPatinhas!;lives;🔴;false]]

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

$interactionReply[

$if[$includes[$selectMenuValues;novidades] $env[notificar;novidades]] $if[$includes[$selectMenuValues;eventos] $env[notificar;eventos]] $if[$includes[$selectMenuValues;minigames];$env[notificar;minigames]] $if[$includes[$selectMenuValues;lives];$env[notificar;lives]]

]
`
}]