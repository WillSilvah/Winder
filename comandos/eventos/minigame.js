module.exports = [{
    type: 'clientReady',
    code: `
    $let[guildID;$getGlobalVar[guildID]]
$setInterval[
$log[Tentativa de executar um minigame
-----------------------------------
MSGS/Minuto: $getGuildVar[msgPerMinute;$get[guildID]]

]

$onlyIf[$getGuildVar[msgPerMinute;$get[guildID]]]>=6;]

$minigame[$randomText[fraseRepeat;questions]]

$wait[1m]
$onlyIf[$getGuildVar[minigameStatus;$get[guildID]]==true;]

$setGuildVar[minigameStatus;false;$get[guildID]]
$setGuildVar[minigameWord;;$get[guildID]]

$setGuildVar[minigameXPmin;0;$get[guildID]]
$setGuildVar[minigameXPmax;0;$get[guildID]]
$setChannelSlowmode[$getGuildVar[batePapo];0]
$sendMessage[### ⛔️ EVENTO DE CHAT FOI CANCELADO!]

;15m;WinderMinigame]
`
},{
    type: 'messageCreate',
    code: `
$onlyIf[$channelID==$getGuildVar[batePapo];]
$onlyIf[$getGuildVar[minigameStatus;$get[guildID]]==true;]
$onlyIf[$if[$includes[$getGuildVar[minigameType];fraseRepeat]==true;$message;$toLowerCase[$message]]==$if[$includes[$getGuildVar[minigameType];fraseRepeat]==true;$getGuildVar[minigameWord;$get[guildID]];$toLowerCase[$getGuildVar[minigameWord;$get[guildID]]]];]
$startTyping[$channelID]
$setGuildVar[minigameStatus;false;$get[guildID]]
$setGuildVar[minigameWord;;$get[guildID]]

$let[xpDrop;$if[$hasRoles[$get[guildID];$authorID;$getGuildVar[memberVerifiedRole]]==true;$randomNumber[$getGuildVar[minigameXPmin;$get[guildID]];$getGuildVar[minigameXPmax;$get[guildID]]];0]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID];$get[xpDrop]];$authorID]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID];$get[xpDrop]];$authorID]

$!addMessageReactions[$channelID;$messageID;🏆]

$setMemberVar[minigameMonthWins;$sum[$getMemberVar[minigameMonthWins;$authorID];1];$authorID]
$setMemberVar[minigameTotalWins;$sum[$getMemberVar[minigameTotalWins;$authorID];1];$authorID]

$sendMessage[$channelID;<@$authorID> | Parabéns, você ganhou ✨**+$get[xpDrop] Pontos de atividade!**!
> **Ganhou 🏆$getMemberVar[minigameMonthWins;$authorID] vezes neste mês!**
]

$!memberRemoveRoles[$get[guildID];$getGuildVar[minigameLastUser;$get[guildID]];$getGuildVar[lastWinMemberRole]]
$wait[1s]
$!memberAddRoles[$get[guildID];$authorID;$getGuildVar[lastWinMemberRole]]
$setGuildVar[minigameLastUser;$authorID;$get[guildID]]

$setGuildVar[minigameEmit;false;$get[guildID]]
`
}]