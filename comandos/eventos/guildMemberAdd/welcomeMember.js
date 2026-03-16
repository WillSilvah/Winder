module.exports = {
    type: "guildMemberAdd",
    code: `
    $setMemberVar[memberJoinedFirstTime;$memberJoinedAt[$guildID;$authorID];$authorID;$guildID]
    $setMemberVar[memberJoinedHere?;true]
    $setMemberVar[inviter;$if[$inviterID[$guildID;$authorID]!=;$inviterID[$guildID;$authorID];$clientID];$authorID;$guildID]
    $setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]
`
}