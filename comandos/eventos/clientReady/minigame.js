module.exports = [{
    type: 'clientReady',
    code: `
    $let[guildID;1462224054676099094]
    $setInterval[
     $onlyIf[$getGlobalVar[sleepMode]==false;]
      $setGuildVar[minigameNextTime;$math[$getTimestamp+$parseString[15m]];$get[guildID]]
     $onlyIf[$getGuildVar[oldMsgPerMinute;$get[guildID];0]>5;]
      $minigame[fraseRepeat;$get[guildID]]
    ;15m;WinderMinigame]    
`
    },{
    type: 'messageCreate',
    code: `
    $onlyIf[$channelID==$getGuildVar[batePapo];]
    $onlyIf[$getGuildVar[minigameStatus;$guildID;false]==true;]
    $onlyIf[$if[$includes[$getGuildVar[minigameType];fraseRepeat]==true;$message;$toLowerCase[$message]]==$if[$includes[$getGuildVar[minigameType];fraseRepeat]==true;$getGuildVar[minigameWord;$guildID];$toLowerCase[$getGuildVar[minigameWord;$guildID]]];]

    $startTyping[$channelID]
    $setGuildVar[minigameStatus;false;$guildID]
    $setGuildVar[minigameWord;;$guildID]
    $let[xpDrop;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;$randomNumber[$getGuildVar[minigameXPmin;$guildID];$getGuildVar[minigameXPmax;$guildID]];0]]
    $setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID;$guildID;0];$get[xpDrop]];$authorID]
    $setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID;$guildID;0];$get[xpDrop]];$authorID]
    $!addMessageReactions[$channelID;$messageID;🏆]
    $setMemberVar[minigameMonthWins;$sum[$getMemberVar[minigameMonthWins;$authorID;$guildID;0];1];$authorID]
    $setMemberVar[minigameTotalWins;$sum[$getMemberVar[minigameTotalWins;$authorID;$guildID;0];1];$authorID]
    $let[time;$getTimestamp]
    
    $sendMessage[$channelID;
     $addSection[
       $addTextDisplay[## <@$authorID> VENCEU!]
       $addTextDisplay[✨**+$get[xpDrop]**] 
       $addThumbnail[$userAvatar]
     ]
    ]
    $startTyping[$channelID]
    $setGuildVar[minigameGuildWins;$math[$getGuildVar[minigameGuildWins;$guildID;0]+1];$guildID]
    $!memberRemoveRoles[$guildID;$getGuildVar[minigameLastUser;$guildID];$getGuildVar[lastWinMemberRole]]
    $wait[1s]
    $!memberAddRoles[$guildID;$authorID;$getGuildVar[lastWinMemberRole]]
    $setGuildVar[minigameLastUser;$authorID;$guildID]
    $setGuildVar[minigameEmit;false;$guildID]
    
    $sendMessage[$channelID;
     $addTextDisplay[### <@$authorID> ganhou 🏆 **$getMemberVar[minigameMonthWins;$authorID;$guildID;0]** vezes neste mês e está em **$getMemberLeaderboardValue[minigameMonthWins;desc;$authorID;$guildID]°** lugar]
    ]
    
`
}]