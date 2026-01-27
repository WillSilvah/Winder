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

$let[pda;$if[$hasRoles[$getVar[guildID];$authorID;$getVar[memberBoosterRole]]==true;$math[$get[bonusVotePDA]+1];0]]

$let[bonusVotePDA;$if[$hasRoles[$getVar[guildID];$authorID;$getVar[memberVotedRole]]==true;$math[$get[basicPDA]+4];0]]

$let[basicPDA;$if[$get[textDivisorPDA]>=20;20;$get[textDivisorPDA]]]

$let[textDivisorPDA;$truncate[$math[$charCount[$message]/3]]]

$onlyIf[$charCount[$message]>=8;]
$onlyIf[$checkContains[$message;lorem;gboard]==false;]
$onlyIf[$hasRoles[$getVar[guildID];$authorID;$getVar[memberVerifiedRole]]==true;]
$onlyIf[$getGuildVar[pickStatus;$getVar[guildID]]==false;]
$onlyIf[$checkContains[$channelID;1462546608758718515]==false;]
$onlyIf[$checkContains[$channelCategoryID[$channelID];1462224055884189780;1463544077554552892]==true;]
$onlyIf[$stringStartsWith[$message;+;=;w!+w+;/;m!]==false;]
$onlyIf[$guildID==$getVar[guildID];]

$cooldown[5s;]
`
},{
//ESPECIAL
name: "give-event",
type: "awaited",
code: `
$addCmdReactions[🎁]

$setGlobalUserVar[item;$sum[$getGlobalUserVar[item;$authorID;$get[item]];$authorID]

$setGuildVar[itemTotal;$sum[$getGuildVar[itemTotal;$getVar[guildID]];$get[item]];$getVar[guildID]]

$let[item;$random[1;3]]

$cooldown[1m;]
$onlyIf[$getGuildVar[eventItemStatus;$getVar[guildID]]==true;]
`
}]