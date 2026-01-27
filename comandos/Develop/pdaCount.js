module.exports = [{
name: "$alwaysExecute",
code: `

$setGlobalUserVar[msgXP;$sum[$getGlobalUserVar[msgXP;$authorID];$get[pda]];$authorID]
$setGlobalUserVar[msgXPtotal;$sum[$getGlobalUserVar[msgXPtotal;$authorID];$get[pda]];$authorID]

$channelSendMessage[1465378100505219072;{newEmbed:
{author:$userTag ($authorID):$userAvatar}
{description:
Contagem de caracteres: $charCount[$message]
Argumentos: $argsCount
PDA ganho: $get[pda]
Link: https://discord.com/channels/$guildID/$channelID/$messageID
}
{footer:msgType0}
{color:Blue}
}]

$let[pda;$if[$get[calcPDA]>=30;30;$get[calcPDA]]]

$let[calcPDA;$truncate[$math[$charCount[$message]/3]]]

$onlyIf[$charCount[$message]>=8;]
$onlyIf[$checkContains[$message;lorem;gboard]==false;]
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462797987041513574]==true;]
$onlyIf[$getGuildVar[pickStatus;1462224054676099094]==false;]
$onlyIf[$guildID==1462224054676099094;]

$cooldown[5s;]
`
},{
//ESPECIAL
name: "give-event",
type: "awaited",
code: `
$addCmdReactions[🎁]

$setGlobalUserVar[item;$sum[$getGlobalUserVar[item;$authorID;$get[item]];$authorID]

$setGuildVar[itemTotal;$sum[$getGuildVar[itemTotal;1462224054676099094];$get[item]];1462224054676099094]

$let[item;$random[1;3]]

$cooldown[1m;]
$onlyIf[$getGuildVar[eventItemStatus;1462224054676099094]==true;]
`
}]