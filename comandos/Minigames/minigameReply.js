module.exports = [{
name: "$alwaysExecute",
code: `
$setGuildVar[minigameEmit;false;$guildID]
$awaitExecute[give-role-event]

$setGuildVar[minigameLastUser;$authorID;$guildID]

$setUserVar[minigameMonthWins;$sum[$getUserVar[minigameMonthWins;$authorID;$guildID];1];$authorID;$guildID]
$setUserVar[minigameTotalWins;$sum[$getUserVar[minigameTotalWins;$authorID;$guildID];1];$authorID;$guildID]

$slowmode[0s;$getGuildVar[batePapo]]
$sendMessage[<@$authorID> | Parabéns, você ganhou ✨**+$get[xpDrop] PDA**!]
$addCmdReactions[🏆]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID;$guildID];$get[xpDrop]];$authorID;$guildID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID;$guildID];$get[xpDrop]];$authorID;$guildID]
$let[xpDrop;$ifAwaited[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;$random[$getGuildVar[minigameXPmin;$guildID];$getGuildVar[minigameXPmax;$guildID]];0]]
$useChannel[$getGuildVar[batePapo]]
$setGuildVar[minigameStatus;false;$guildID]
$setGuildVar[minigameWord;kkkkkkk;$guildID]

$onlyIf[$message==$getGuildVar[minigameWord;$guildID];]
$onlyIf[$getGuildVar[minigameStatus;$guildID]==true;]

`
},{
name: "give-role-event",
type: "awaited",
code: `
$setGuildVar[minigameLastUser;$authorID;$guildID]
$giveRole[$guildID;$authorID;$getGuildVar[lastWinMemberRole];Se tornou o último vencedor do evento de chat]
$wait[1s]
$removeRole[$guildID;$getGuildVar[minigameLastUser;$guildID];$getGuildVar[lastWinMemberRole];Não é mais último vencedor do evento de chat]
`
}]