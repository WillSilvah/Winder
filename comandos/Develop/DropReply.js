module.exports = [{
name: "$alwaysExecute",
code: `
$setGuildVar[pickEmit;false;$getVar[guildID]]
$awaitExecute[give-role-event]

$setUserVar[pickCount;$sum[$getUserVar[pickCount;$authorID;$getVar[guildID]];1];$authorID;$getVar[guildID]]
$slowmode[0s;861337787192836117]
$sendMessage[<@$authorID> | Parabéns, você ganhou ✨**+$get[xpDrop] PDA**!]
$addCmdReactions[⭐]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID;$getVar[guildID]];$get[xpDrop]];$authorID;$getVar[guildID]]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID;$getVar[guildID]];$get[xpDrop]];$authorID;$getVar[guildID]]
$let[xpDrop;$ifAwaited[$hasRoles[$getVar[guildID];$authorID;$getVar[memberVerifiedRole]]==true;$random[$getGuildVar[pickXPmin;$getVar[guildID]];$getGuildVar[pickXPmax;$getVar[guildID]]];0]]
$useChannel[861337787192836117]
$setGuildVar[pickStatus;false;$getVar[guildID]]
$setGuildVar[pickWord;kkkkkkk;$getVar[guildID]]
$onlyIf[$toLowerCase[$message]==$toLowerCase[$getGuildVar[pickWord;$getVar[guildID]]];]
$onlyIf[$getGuildVar[pickStatus;$getVar[guildID]]==true;]

`
},{
name: "give-role-event",
type: "awaited",
code: `
$setGuildVar[pickLastUser;$authorID;$getVar[guildID]]
$wait[5s]
$removeRole[$getVar[guildID];$getGuildVar[pickLastUser;$getVar[guildID]];$getVar[lastWinMemberRole];Não é mais último vencedor do evento de chat]
$wait[5s]
$giveRole[$getVar[guildID];$authorID;$getVar[lastWinMemberRole];Se tornou o último vencedor do evento de chat]
`
}]