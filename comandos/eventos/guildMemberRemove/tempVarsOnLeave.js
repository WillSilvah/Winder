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
$if[$memberExists[$memberExists[$guildID;{0}]==false;
$deleteRecords[messageToday;{0}]
$deleteRecords[pdaMonth;{0}]
$deleteRecords[pdaTotal;{0}]
$deleteRecords[votesMonth;{0}]
$deleteRecords[votesTotal;{0}]
$deleteRecords[invitesMonth;{0}]
$deleteRecords[invitesTotal;{0}]
$deleteRecords[lastMessageTime;{0}]
]
];30d;backupVars_$authorID_$guildID;$authorID]

`
}