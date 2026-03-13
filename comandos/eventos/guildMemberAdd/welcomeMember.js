module.exports = {
    type: "guildMemberAdd",
    code: `
    $setMemberVar[memberJoinedHere?;true]
    $setMemberVar[inviter;$if[$inviterID[$guildID;$authorID]!=;$inviterID[$guildID;$authorID];$clientID];$authorID;$guildID]
    $setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]
`
}