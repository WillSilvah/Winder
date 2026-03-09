module.exports = {
    type: "guildMemberAdd",
    code: `
    $setMemberVar[memberJoinedHere?;true]
    
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]
`
}