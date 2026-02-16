module.exports = {
    type: "messageCreate",
    code: `
$cooldown[60s;]

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