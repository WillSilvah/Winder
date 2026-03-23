module.exports = [{
    type: "clientReady",
    code: `
    $cron[
    $let[guildID;1462224054676099094]

    $arrayLoad[birthday;, ;$guildMemberIDs[$get[guildID]]]
     $arrayForEach[birthday;id;
     $if[$getMemberVar[birthday;$env[id];$get[guildID]]==$day[TwoDigit]/$month[TwoDigit];
     
     $!memberAddRoles[$guildID;$env[id];$getGuildVar[birthdayRole]]
     
     $sendMessage[$getGuildVar[batePapo;$get[guildID]];
     $addSection[
      $addTextDisplay[## 🎂<@$env[id]> ESTÁ FAZENDO $math[$year-$getMemberVar[birthdayYear;$env[id];$get[guildID]]] ANOS HOJE!]
      $addThumbnail[$userAvatar[$env[id]]]
     ]
      $addSeparator[Large;true]
     ]

    $let[msgid;$sendMessage[$getGuildVar[birthdayChannel;$get[guildID]];
    $addSection[
     $addTextDisplay[## 🎂 HOJE É ANIVERSÁRIO DO @$userTag[$env[id]]!]
     $addTextDisplay[Está fazendo $math[$year-$getMemberVar[birthdayYear;$env[id];$get[guildID]]] anos.]
     $addThumbnail[$userAvatar[$env[id]]]
    ]
    $addSeparator[Large;true]
    $addTextDisplay[-# **Adicione o seu aniversário com /aniversário adicionar**]
    ;true]]
    $publishMessage[$getGuildVar[birthdayChannel;$get[guildID]];$get[msgid]]

    $!advancedTimeout[$esc[
     $!memberRemoveRoles[{guildID};{userID};$getGuildVar[birthdayRole;{guildID}]]
     ];17h;BirthayRole_$env[id];{"userID": "$env[id]", "guildID": $guildID"}]
]
]

;0 7 * * *;America/Recife]
    
    
`
}]