module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$guildID==1462224054676099094;]
$cooldown[60s;]
$onlyIf[$argsCount[$message]>=3;]
$onlyIf[$checkContains[$message;lorem;gboard]==false;]
$onlyIf[$getGuildVar[minigameStatus]==false;]
$onlyIf[$startsWith[$message;+;=;w!+w+;/;m!]==false;]
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;]

$let[textDivisorPDA;$truncate[$math[$charCount[$message]/4]]]

$let[basicPDA;$if[$get[textDivisorPDA]>=30;30;$get[textDivisorPDA]]]

$let[bonusVotePDA;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVotedRole]]==true;5;0]]

$let[bonusBoosterPDA;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberBoosterRole]]==true;1;0]]

$let[pda;$math[$get[bonusBoosterPDA]+$get[bonusVotePDA]+$get[basicPDA]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth];$get[pda]]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal];$get[pda]]]

`,
nonprefixed: true
}