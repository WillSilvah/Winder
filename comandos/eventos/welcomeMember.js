module.exports = {
    type: "guildMemberAdd",
    code: `
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]

$let[inviterID;$inviterID[$guildID;$authorID]]
$if[$get[inviterID]!=;

$setMemberVar[invitesMouth;$math[$getMemberVar[invitesMouth;$get[inviterID];$guildID;0]+1];$get[inviterID];guildID]

$setMemberVar[invitesTotal;$math[$getMemberVar[invitesTotal;$get[inviterID];$guildID;0]+1];$get[inviterID];guildID]

]
`,
}