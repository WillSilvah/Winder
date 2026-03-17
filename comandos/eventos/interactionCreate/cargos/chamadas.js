module.exports = [{
    name: "bchamadas",
    type: "interactionCreate",
    code: `
    $ephemeral
    $interactionReply[
     $addContainer[
      $addSection[
       $addTextDisplay[## CHAMADAS!]
       $addTextDisplay[**💬! 🔉!**]
       $addTextDisplay[Sabia que você pode ser mencionado no bate papo para conversar sobre um assunto?]
       $addTextDisplay[-# - Os cargos de chamadas podem ser mencionados por **qualquer pessoa** durante **06:00** até **22:00** no horário de Pernambuco.]
       $addTextDisplay[> **⚠️ Lembre-se, pode acontecer de receber várias menções**]
       $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f44b.png]
       ]
      ;Yellow]
     $addActionRow
      $addStringSelectMenu[chamadas;Escolha uma notificação para receber;false;1;1]
       $addOption[Chamar para conversar;Seja chamado para conversar sobre algum assunto.;conversar;💬;false]
       $addOption[Chamar para calls;Gosta de participar de Calls?;call;🔉;false]
       $addOption[Não quero receber chamadas;É incômodo?;remove;❌;false]
    ]
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
     $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você não será mais chamado pelos membros.]
    
     $arrayForEach[chamadasID;id;
     $!memberRemoveRoles[$guildID;$authorID;$env[id]]
     ]
     ]

    $else[
     $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Te dei o cargo <@&$env[chamadas;$selectMenuValues]>!
     $!memberAddRoles[$guildID;$authorID;$env[chamadas;$selectMenuValues]]
     ]
    ]
   ]

    
`
}]