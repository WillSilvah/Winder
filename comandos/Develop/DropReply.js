module.exports = [{
name: "$alwaysExecute",
code: `
$setGuildVar[pickEmit;false;861313067291115541]
$awaitExecute[give-role-event]

$setUserVar[pickCount;$sum[$getUserVar[pickCount;$authorID;861313067291115541];1];$authorID;861313067291115541]
$slowmode[0s;861337787192836117]
$sendMessage[<@$authorID> | Parabéns, você ganhou ✨**+$get[xpDrop] PDA**!]
$addCmdReactions[⭐]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID;861313067291115541];$get[xpDrop]];$authorID;861313067291115541]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID;861313067291115541];$get[xpDrop]];$authorID;861313067291115541]
$let[xpDrop;$ifAwaited[$hasRoles[861313067291115541;$authorID;1065319142271496212]==true;$random[$getGuildVar[pickXPmin;861313067291115541];$getGuildVar[pickXPmax;861313067291115541]];0]]
$useChannel[861337787192836117]$setGuildVar[pickStatus;false;861313067291115541]
$setGuildVar[pickWord;kkk;861313067291115541]
$onlyIf[$toLowerCase[$message]==$toLowerCase[$getGuildVar[pickWord;861313067291115541]];]
$onlyIf[$getGuildVar[pickStatus;861313067291115541]==true;]

`
},{
name: "give-role-event",
type: "awaited",
code: `
$setGuildVar[pickLastUser;$authorID;861313067291115541]
$wait[5s]
$removeRole[861313067291115541;$getGuildVar[pickLastUser;861313067291115541];1179733370754846750;Não é mais último vencedor do evento de chat]
$wait[5s]
$giveRole[861313067291115541;$authorID;1179733370754846750;Se tornou o último vencedor do evento de chat]
`
}]