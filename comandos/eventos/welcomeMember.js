module.exports = {
    type: "guildMemberAdd",
    code: `
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]
`,
}