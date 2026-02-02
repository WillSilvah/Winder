module.exports = [{
name: "testepda",
aliases: ['tpda'],
desc: "aaaaaaa",
category: "aaaaaaaaa",
usage: "testepda",
code: `
$sendMessage[<@$authorID>
TextDivisor: $get[textDivisorPDA]
BonusVoted: $get[bonusVotePDA]
BonusBooster: $get[bonusBoosterPDA]

PDA ganho: $get[pda]
]


$let[pda;$math[$get[bonusBoosterPDA]+$get[bonusVotePDA]+$get[basicPDA]]]

$let[bonusBoosterPDA;$if[$hasRoles[$guildID;$authorID;$getVar[memberBoosterRole]]==true;1;0]]

$let[bonusVotePDA;$if[$hasRoles[$guildID;$authorID;$getVar[memberVotedRole]]==true;4;0]]

$let[basicPDA;$if[$get[textDivisorPDA]>=15;15;$get[textDivisorPDA]]]

$let[textDivisorPDA;$truncate[$math[$charCount[$message]/4]]]

`
}]
