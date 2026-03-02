module.exports = {
    type: "guildMemberAdd",
    code: `
$setMemberVar[messageMonth;$getMemberVar[tempMessageMonth];$authorID;$guildID]
$setMemberVar[messageTotal;$getMemberVar[tempMessageTotal];$authorID;$guildID]
$setMemberVar[messageWeekly;$getMemberVar[tempMessageWeekly];$authorID;$guildID]
$setMemberVar[messageToday;$getMemberVar[tempMessageToday];$authorID;$guildID]
$setMemberVar[pdaMonth;$getMemberVar[tempPdaMonth];$authorID;$guildID]
$setMemberVar[pdaTotal;$getMemberVar[tempPdaTotal];$authorID;$guildID]
$setMemberVar[votesMonth;$getMemberVar[tempVotesMonth];$authorID;$guildID]
$setMemberVar[votesTotal;$getMemberVar[tempVotesTotal];$authorID;$guildID]
$setMemberVar[invitesMonth;$getMemberVar[tempInvitesMonth];$authorID;$guildID]
$setMemberVar[invitesTotal;$getMemberVar[tempInvitesTotal];$authorID;$guildID]
$deleteRecords[tempMessageMonth]
$deleteRecords[tempMessageTotal]
$deleteRecords[tempMessageWeekly]
$deleteRecords[tempMessageToday]
$deleteRecords[tempPdaMonth]
$deleteRecords[tempPdaTotal]
$deleteRecords[tempVotesMonth]
$deleteRecords[tempVotesTotal]
$deleteRecords[tempInvitesMonth]
$deleteRecords[tempInvitesTotal]
`
}