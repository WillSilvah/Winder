module.exports = [{
    type: 'clientReady',
    code: `
$setInterval[
$let[guildID;1462224054676099094]
$sendMessage[$getGlobalVar[consoleChat];Tentativa de executar um minigame
-----------------------------------
MSGS/Minuto: $getGuildVar[msgPerMinute;$get[guildID];0]

]
$if[$getGuildVar[msgPerMinute;$get[guildID];0]>5;

$sendMessage[$getGuildVar[batePapo;$get[guildID]];$minigame[fraseRepeat]]

$wait[1m]
$onlyIf[$getGuildVar[minigameStatus;$get[guildID]]==true;]

$setGuildVar[minigameStatus;false;$get[guildID]]
$setGuildVar[minigameWord;;$get[guildID]]

$setGuildVar[minigameXPmin;0;$get[guildID]]
$setGuildVar[minigameXPmax;0;$get[guildID]]
$setChannelSlowmode[$getGuildVar[batePapo;$get[guildID]];0]
$sendMessage[$getGuildVar[batePapo;$get[guildID]];### ⛔️ EVENTO DE CHAT FOI CANCELADO!]
]
;15m;WinderMinigame]
`
},{
    type: 'messageCreate',
    code: `
$onlyIf[$channelID==$getGuildVar[batePapo];]
$onlyIf[$getGuildVar[minigameStatus;$guildID]==true;]
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

$sendMessage[$channelID;<@$authorID> | Parabéns, você ganhou ✨**+$get[xpDrop] Pontos de atividade!**!
> **Ganhou 🏆$getMemberVar[minigameMonthWins;$authorID] vezes neste mês!**
]

$!memberRemoveRoles[$guildID;$getGuildVar[minigameLastUser;$guildID];$getGuildVar[lastWinMemberRole]]
$wait[1s]
$!memberAddRoles[$guildID;$authorID;$getGuildVar[lastWinMemberRole]]
$setGuildVar[minigameLastUser;$authorID;$guildID]

$setGuildVar[minigameEmit;false;$guildID]
`
}]