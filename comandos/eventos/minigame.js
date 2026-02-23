module.exports = [{
    type: 'clientReady',
    code: `
$setInterval[
$onlyIf[$getGuildVar[msgPerMinute;$guildID]>=6;]

$minigame[fraseRepeat]

$wait[1m]
$onlyIf[$getGuildVar[minigameStatus;$guildID]==true;]

$setGuildVar[minigameStatus;false;$guildID]
$setGuildVar[minigameWord;;$guildID]

$setGuildVar[minigameXPmin;0;$guildID]
$setGuildVar[minigameXPmax;0;$guildID]
$setChannelSlowmode[$getGuildVar[batePapo];0]
$sendMessage[### ⛔️ EVENTO DE CHAT FOI CANCELADO!]

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

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID];$get[xpDrop]];$authorID]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID];$get[xpDrop]];$authorID]

$!addMessageReactions[$channelID;$messageID;🏆]

$setMemberVar[minigameMonthWins;$sum[$getMemberVar[minigameMonthWins;$authorID];1];$authorID]
$setMemberVar[minigameTotalWins;$sum[$getMemberVar[minigameTotalWins;$authorID];1];$authorID]

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