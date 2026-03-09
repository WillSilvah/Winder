module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$getGuildVar[memberVerifiedRole]!=;$log[PDA's no servidor "$guildName" não pode ser contabilizado pôs: "memberVerifiedRole" não foi configurado.]]
$onlyIf[$getGuildVar[memberVotedRole]!=;$log[PDA's no servidor "$guildName" não pode ser contabilizado pôs: "memberVotedRole" não foi configurado.]]
$onlyIf[$getGuildVar[memberBoosterRole]!=;$log[PDA's no servidor "$guildName" não pode ser contabilizado pôs: "memberBoosterRole" não foi configurado.]]

$cooldown[$authorID;60s;]
$onlyIf[$argsCount[$message]>=3;]
$onlyIf[$checkContains[$message;lorem;gboard]==false;]
$onlyIf[$getGuildVar[minigameStatus]==false;]
$onlyIf[$startsWith[$message;+;=;w!+w+;/;m!]==false;]
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;]
$onlyIf[$includes[$channelID;1478505120525324541]==false;]

$let[textDivisorPDA;$truncate[$math[$charCount[$message]/4]]]

$let[basicPDA;$if[$get[textDivisorPDA]>=15;15;$get[textDivisorPDA]]]

$let[bonusVotePDA;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVotedRole]]==true;5;0]]

$let[bonusBoosterPDA;$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberBoosterRole]]==true;1;0]]

$let[pda;$math[$get[bonusBoosterPDA]+$get[bonusVotePDA]+$get[basicPDA]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID;$guildID;0];$get[pda]]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID;$guildID;0];$get[pda]]]

`,
nonprefixed: true
}