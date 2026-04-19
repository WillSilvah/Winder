module.exports = [{
    type: 'clientReady',
    code: `
    $let[time;15m]
    $let[guildID;1462224054676099094]
    $setInterval[
     $onlyIf[$getGlobalVar[sleepMode]==false;]
      $setGuildVar[minigameNextTime;$math[$getTimestamp+$parseString[$get[time]]];$get[guildID]]
     $onlyIf[$getGuildVar[oldMsgPerMinute;$get[guildID];0]>6;]
      $sendMessage[$getGuildVar[batePapo;$get[guildID]];### UM MINIGAME VAI SER EXECUTADO EM UM MINUTO...]
      $wait[60s]
      $startTyping[$getGuildVar[batePapo;$get[guildID]]]
      $minigame[fraseRepeat;$get[guildID]]
    ;$get[time];WinderMinigame]    
`
    },{
    type: 'messageCreate',
    code: `
    $jsonLoad[session;$readFile[Recursos/session.json]]
    $onlyIf[$channelID==$getGuildVar[batePapo];]
    $onlyIf[$getGuildVar[minigameStatus;$guildID;false]==true;]
    $onlyIf[$if[$includes[$getGuildVar[minigameType];fraseRepeat]==true;$message;$toLowerCase[$message]]==$if[$includes[$getGuildVar[minigameType];fraseRepeat]==true;$getGuildVar[minigameWord;$guildID];$toLowerCase[$getGuildVar[minigameWord;$guildID]]];$!addMessageReactions[$channelID;$messageID;❌️]]
    $setGuildVar[minigameWord;;$guildID]
    $!setChannelSlowmode[$channelID;0]
    $setGuildVar[minigameStatus;false;$guildID]
    $startTyping[$channelID]
    $let[xpDrop;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;$randomNumber[$getGuildVar[minigameXPmin;$guildID];$getGuildVar[minigameXPmax;$guildID]];0]]
    $setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID;$guildID;0];$get[xpDrop]];$authorID]
    $setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID;$guildID;0];$get[xpDrop]];$authorID]
    $!addMessageReactions[$channelID;$messageID;🏆]
    $setMemberVar[minigameMonthWins;$sum[$getMemberVar[minigameMonthWins;$authorID;$guildID;0];1];$authorID]
    $setMemberVar[minigameTotalWins;$sum[$getMemberVar[minigameTotalWins;$authorID;$guildID;0];1];$authorID]
    
    $sendMessage[$channelID;
     $addSection[
       $addTextDisplay[## <@$authorID> VENCEU!]
       $addTextDisplay[✨**+$get[xpDrop]**] 
       $addThumbnail[$userAvatar]
     ]
    ]
    
    $sendMessage[$channelID;### <@$authorID> demorou $round[$math[$math[$getTimestamp-$getGuildVar[minigameTimestamp]]/1000]] segundos para ganhar $if[$getMemberVar[minigameTyping]==true;e foi visto digitando.]]
    
    $if[$getMemberVar[minigameMonthWins;$authorID;$guildID;0]==5;
     $sendMessage[$channelID;
      $addSection[
        $addTextDisplay[## <@$authorID> MISSÃO CONCLUÍDA!]
        $addTextDisplay[**🏆 Ganhar 5 (cinco) minigames na temporada $env[session;number]: $env[session;name]!**] 
        $addThumbnail[$userAvatar]
      ]
     ]
    ]

    $setGuildVar[minigameGuildWins;$math[$getGuildVar[minigameGuildWins;$guildID;0]+1];$guildID]
    $!memberRemoveRoles[$guildID;$getGuildVar[minigameLastUser;$guildID];$getGuildVar[lastWinMemberRole]]
    $wait[1s]
    $!memberAddRoles[$guildID;$authorID;$getGuildVar[lastWinMemberRole]]
    $setGuildVar[minigameLastUser;$authorID;$guildID]
    $setGuildVar[minigameEmit;false;$guildID]
    $!memberAddRoles[$guildID;$authorID;1463139788650582180]
    $deleteRecords[minigameTyping]
    $wait[60s]
    $startTyping
    $sendMessage[$channelID;
     $addTextDisplay[### <@$authorID> ganhou 🏆 **$getMemberVar[minigameMonthWins;$authorID;$guildID;0]** vezes neste mês e está em **$getMemberLeaderboardValue[minigameMonthWins;desc;$authorID;$guildID]°** lugar]
    ]
`
},{
    type: "typingStart",
    code: `
    $setGuildVar[memberTypingLogToday;$userTag começou a digitar de $hour[TwoDigit]:$minute[TwoDigit]:$seconds[TwoDigit]\n$getGuildVar[memberTypingLogToday]]
    $if[$getGuildVar[minigameStatus;$guildID;false]==true;
    $setMemberVar[minigameTyping;true]
    ]
`
}]