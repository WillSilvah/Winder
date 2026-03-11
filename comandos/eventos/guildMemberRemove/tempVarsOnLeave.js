module.exports = {
    type: "guildMemberRemove",
    code: `$stop
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
$deleteRecords[pdaTotal;$authorID]
$deleteRecords[pdaMonth;$authorID]

$advancedTimeout[$esc[
$if[$memberExists[$guildID;{0}]==false;
$sendMessage[{2};
### RESTAURAÇÃO DO WINDER
Dados salvos de **$userTag[{0}]** ({0}) antes da exclusão automática de 30 dias.
$attachment[$searchDB[;{1};;;];WinderDB_{0}_data.json;true]
]

$wait[10s]

$deleteRecords[$deleteRecords[;{0};;;]]
$setMemberVar[memberJoinedHere?;true;{0};{1}]

]
];30d;backupVars_$authorID_$guildID;$authorID;$guildID;$getGlobalVar[databaseLog]]

`
}