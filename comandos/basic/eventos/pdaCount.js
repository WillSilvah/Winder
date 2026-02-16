module.exports = {
    type: "messageCreate",
    code: `
$cooldown[60s;]
$onlyIf[$argsCount[$message]>=3;]
$onlyIf[$checkContains[$message;lorem;gboard]==false;]
$onlyIf[$getGuildVar[minigameStatus]==false;]
$onlyIf[$checkContains[$channelID;1462546608758718515]==false;]
$onlyIf[$checkContains[$channelCategoryID[$channelID];1462224055884189780]==true;]
$onlyIf[$stringStartsWith[$message;+;=;w!+w+;/;m!]==false;] 
$onlyIf[$hasRoles[$guildID;$authorID;$getVar[memberVerifiedRole]]==true;]

$let[textDivisorPDA;$truncate[$math[$charCount[$message]/4]]]

$let[basicPDA;$if[$get[textDivisorPDA]>=30;30;$get[textDivisorPDA]]]

$let[bonusVotePDA;$if[$hasRoles[$guildID;$authorID;$getVar[memberVotedRole]]==true;5;0]]

$let[bonusBoosterPDA;$if[$hasRoles[$guildID;$authorID;$getVar[memberBoosterRole]]==true;1;0]]

$let[pda;$math[$get[bonusBoosterPDA]+$get[bonusVotePDA]+$get[basicPDA]]]

$setMemberVar[msgXP;$sum[$getMemberVar[msgXP];$get[pda]]]
$setMemberVar[msgXPtotal;$sum[$getMemberVar[msgXPtotal];$get[pda]]]

`,
nonprefixed: true
}