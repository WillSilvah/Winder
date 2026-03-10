module.exports = {
    type: "guildMemberRemove",
    code: `
$setMemberVar[tempMessageMonth;$getMemberVar[messageMonth;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempMessageTotal;$getMemberVar[messageTotal;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempMessageWeekly;$getMemberVar[messageWeekly;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempMessageToday;$getMemberVar[messageToday;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempPdaMonth;$getMemberVar[pdaMonth;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempPdaTotal;$getMemberVar[pdaTotal;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempVotesMonth;$getMemberVar[votesMonth;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempVotesTotal;$getMemberVar[votesTotal;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempInvitesMonth;$getMemberVar[invitesMonth;$authorID;$guildID;0];$authorID;$guildID]

$setMemberVar[tempInvitesTotal;$getMemberVar[invitesTotal;$authorID;$guildID;0];$authorID;$guildID]

$deleteRecords[messageMonth;$authorID]
$deleteRecords[messageTotal;$authorID]
$deleteRecords[messageWeekly;$authorID]

$advancedTimeout[$esc[
$deleteRecords[messageToday;$authorID]
$deleteRecords[pdaMonth;$authorID]
$deleteRecords[pdaTotal;$authorID]
$deleteRecords[votesMonth;$authorID]
$deleteRecords[votesTotal;$authorID]
$deleteRecords[invitesMonth;$authorID]
$deleteRecords[invitesTotal;$authorID]
$deleteRecords[lastMessageTime;$authorID]
];

`
}