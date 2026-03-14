module.exports = {
 type: 'guildMemberUpdate',
 code: `
    $if[$oldMember[addedRoles]==$getGuildVar[memberVotedRole;$guildID];
     $setMemberVar[votesMonth;$math[$getMemberVar[votesMonth;$authorID;$guildID;0]+1]]
     $setMemberVar[votesTotal;$math[$getMemberVar[votesTotal;$authorID;$guildID;0]+1]]
     $let[pda;5]
     $setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID;$guildID;$get[pda]];$get[pda]]]
     $setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID;$guildID;$get[pda]];$get[pda]]]
     $sendMessage[$getGuildVar[batePapo];
      $addSection[
       $addTextDisplay[### ⬆️ <@$authorID> votou!]
       $addTextDisplay[-# **$getMemberVar[votesMonth;$authorID;$guildID;0] votos neste mês! | ✨ +$get[pda]**]
      $addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;⬆️;false]
     ]
     $addSeparator[Large;true]
     $deleteIn[5m]
    ]

    $if[$isUserDMEnabled==true;
     $sendDM[$authorID;Obrigado por ter votado! Lembrarei você de votar às $discordTimestamp[$getMemberVar[nextVoteRemindTime;{0}];ShortDateMediumTime]. Use o comando /lembrete voto para desativar ou ativar os lembretes na DM!]
    ]

    $setMemberVar[nextVoteRemindTime;$math[$getTimestamp+$parseString[6h]]]

    $advancedTimeout[$esc[
     $sendDM[{0};
     $addContainer[
      $addSection[
       $addTextDisplay[## 🔔 LEMBRETE!]
       $addTextDisplay[Votar na Patinhas ás $discordTimestamp[$getMemberVar[nextVoteRemindTime;{0}];ShortDateMediumTime]]
       $addButton[https://discords.com/servers/$guildID/upvote;Votar;Link;⬆️;false]
      ]
    ;Blue]
    ]
    ];6h;VotesReminder-$authorID;$authorID;$guildID]

    $if[$getMemberVar[votesTotal;$authorID;$guildID;0]==60;
     $!memberAddRoles[$guildID;$authorID;$getGuildVar[memberSupporterRole;$guildID]]
     $sendMessage[$getGuildVar[batePapo];<@$authorID> Obrigado por ter votado 60 vezes na Patinhas! ❤️]
    ]

]
`
}


