module.exports = [{
    name: "bclubgaming",
    type: "interactionCreate",
    code: `
    $ephemeral
    $interactionReply[
     $addContainer[
      $addSection[
       $addTextDisplay[## CLUBES DE JOGOS!]
       $addTextDisplay[Quais jogos você joga?]
       $addTextDisplay[Se estiver faltando algum jogo que você jogue, faça uma sugestão!]

       $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f3ae.png]
      ]
     ;Green]
    $addActionRow
    $addStringSelectMenu[clubgaming;Escolha um clube;false;1;1]
     $addOption[Minecraft;;minecraft;⛏️;false]
     $addOption[Terraria;;terraria;🌍;false]
     $addOption[Brawl Stars;;brawlstars;✨;false]
     $addOption[Free Fire;;freefire;🔫;false]
     $addOption[Fortnite;;fortnite;⛏️;false]
     $addOption[Call Of Duty;;callofduty;🔫;false]
     $addOption[League Of Legends;;leagueoflegends;✨;false]
     $addOption[Just Dance;;justdance;🕺;false]
     $addOption[Marvel Rivals;;marvelrivals;⚔️;false]
    
    ]
`
},{
    type: "interactionCreate",
    name: "clubgaming",
    code: `$ephemeral $disableAllMentions
    $jsonLoad[clubgaming;{
    "terraria": "1483243650677866617",
    "marvelrivals": "1483245751437099098",
    "roblox": "1483241710484983940",
    "minecraft": "1483236853258915861",
    "fortnite": "1483242315370987592",
    "leagueoflegends": "1483242198202843306",
    "brawlstars": "1483245444229501098",
    "justdance": "1483244200865693977",
    "callofduty": "1483243496650309814",
    "freefire": "1483243328475500544"
}
    ]
    $arrayLoad[clubesID;,;$jsonValues[clubes;,]]

    $if[$hasRoles[$guildID;$authorID;$env[clubgaming;$selectMenuValues]]==false;
       $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Adicionei você ao clube: <@&$env[clubgaming;$selectMenuValues]>!]
      $!memberAddRoles[$guildID;$authorID;$env[clubgaming;$selectMenuValues]]
    ;
    $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Removi você do clube: <@&$env[clubgaming;$selectMenuValues]>!]
    $!memberRemoveRoles[$guildID;$authorID;$env[clubgaming;$selectMenuValues]]
     ]

    
`
}]