module.exports = [{
    name: "chamadas",
    type: "clientReady",
    code: `
    $deleteMessage[1470875996356874292;$getGlobalVar[chamadas_messageID]]
    
    $wait[1s]
    
$let[msgID;$sendMessage[1470875996356874292;$disableAllMentions

    $addContainer[
    $addSection[
    $addTextDisplay[## CHAMADAS!
**💬! 🔉!**

Sabia que você pode ser mencionado no bate papo para conversar sobre um assunto?
-# - Os cargos de chamadas podem ser mencionados por **qualquer pessoa** durante **06:00** até **22:00** no horário de Pernambuco.

> **⚠️ Lembre-se, pode acontecer de receber várias menções**
]
    $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f44b.png]
]
;Yellow]

    $addActionRow
    $addStringSelectMenu[chamadas;Escolha uma notificação para receber;false;1;1]
    $addOption[Chamar para conversar;Seja chamado para conversar sobre algum assunto junto com a gente;conversar;💬;false]
    
    $addOption[Chamar para calls;Gosta de participar de Calls? Seja chamado quando quiserem fazer uma!;call;🔉;false]
    
    $addOption[Não quero receber chamadas;É incômodo? Pode remover todas as chamadas se quiser.;remove;❌;false]
    
;true]]

    $setGlobalVar[chamadas_messageID;$get[msgID]]
`
},{
    type: "interactionCreate",
    name: "chamadas",
    code: `$ephemeral $disableAllMentions
    $jsonLoad[chamadas;{
  "conversar": "1463138976494915646",
  "call": "1463139649806663782"
}]
    $arrayLoad[chamadasID;,;$jsonValues[chamadas;,]]

    $ifx[
    $if[$selectMenuValues==remove;

    $arrayForEach[chamadasID;id;
$!memberRemoveRoles[$guildID;$authorID;$env[id]]
]

    $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você não será mais chamado pelos membros.]
]

    $else[
    
    $!memberAddRoles[$guildID;$authorID;$env[chamadas;$selectMenuValues]]

    $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Te dei o cargo <@&$env[chamadas;$selectMenuValues]>!
]
]
]

    
`
}]