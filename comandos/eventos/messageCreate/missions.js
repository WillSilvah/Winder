module.exports = [{
    type: "messageCreate",
    code: `
    $if[$getMemberVar[messageTotal;$authorID;$guildID;0]==1;
     $reply[$channelID;$messageID]
     $startTyping[$channelID]
     $wait[2s]
      $sendMessage[$channelID;Olá, seja bem vindo(a) a patinhas! 👋 Não se esqueça de passar no <#1470875996356874292> para personalizar seu perfil e pegar cargos. Dúvidas? <#1463277652562411787> 😘
     ]
    ]

    $if[$getGuildVar[allMemberRole]!=;
     $if[$getMemberVar[messageTotal;$authorID]>=2;
      $!memberAddRoles[$guildID;$authorID;$getGuildVar[allMemberRole];1481259180877811930;1481256988921954418;1481256655986360361;1481256478563237888;1481261082977763338;1483166757890818192]
     ]
    ]

    $if[$getGuildVar[memberVerifiedRole]!=;
     $if[$getMemberVar[messageTotal;$authorID]>=200;
      $onlyIf[$getGlobalVar[sleepMode]==false]
      $onlyIf[$getMemberVar[memberIsolated;$authorID;$guildID;false]==false]
      $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false]
      $reply
      $sendMessage[$channelID;Você agora é um **Peludo Verificado**! $emoji[$emojiID[pats_foxClapping]] Você está gostando da Patinhas? 👀;false]
      $!memberAddRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]
     ]
    ]

    $if[$getGuildVar[guildMonthMessages;$guildID;0]==$getGuildVar[guildMonthMessagesMeta;$guildID];
     $setGuildVar[guildMonthMessagesMeta;$math[$getGuildVar[guildMonthMessagesMeta;$guildID]+10000];$guildID]
    ]

`
},{
    type: "messageCreate",
    code: `
    $onlyIf[$guildID==1462224054676099094;]
    
    $cooldown[$authorID;10s]
    $if[$getMemberVar[messageMonth;$authorID;$guildID;0]>=$getGuildVar[guildActivityMedia;$guildID;0];
     $if[$hasRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]==false;
     $!memberAddRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]
     ;
     $if[$hasRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]==true;
     $!memberRemoveRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]
    ]]
    ]
`
}]
