module.exports = [{
    name: "bclubes",
    type: "interactionCreate",
    code: `
    $ephemeral
    $interactionReply[
     $addContainer[
      $addSection[
       $addTextDisplay[## CLUBES!]
       $addTextDisplay[**🐱 😘! 🤫! 🏳️‍🌈**]
       $addTextDisplay[Qual clube você se identifica ou quer participar?]

       $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f465.png]
      ]
     ;Green]
    $addActionRow
    $addStringSelectMenu[clubes;Escolha um clube;false;1;1]
     $addOption[Patinhas Beta;;winder;👀;false]
     $addOption[Clube do Winder;;winder;🐱;false]
     $addOption[BoyKisser;;boykisser;😘;false]
     $addOption[Fofoqueiras;;fofoqueiras;🤫;false]
     $addOption[Vale Animado;;valeanimado;🏳️‍🌈;false]
     $addOption[Sair de todos os clubes;Até logo;remove;❌;false]
    
    ]
`
},{
    type: "interactionCreate",
    name: "clubes",
    code: `$ephemeral $disableAllMentions
    $jsonLoad[clubes;{
    "boykisser": "1465012850740302027",
    "fofoqueiras": "1481404732928168077",
    "valeanimado": "1463156445276143707",
    "winder": "1481748351857725521",
    "beta": "1481788050957926450"
}
]
    $arrayLoad[clubesID;,;$jsonValues[clubes;,]]

    $ifx[
    $if[$selectMenuValues==remove;
     $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você saiu de todos os clubes.]
    
    $arrayForEach[clubesID;id;
    $!memberRemoveRoles[$guildID;$authorID;$env[id]]
]
]

    $else[
    $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você está participando do clube: <@&$env[clubes;$selectMenuValues]>!
    $!memberAddRoles[$guildID;$authorID;$env[clubes;$selectMenuValues]]
]
]
]

    
`
}]