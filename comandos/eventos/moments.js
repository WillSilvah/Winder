module.exports = {
    type: 'clientReady',
    code: `
$let[guildID;1462224054676099094]
$cron[

$setGuildVar[guildActivityMedia;media[messageMonth;11];$get[guildID]]

$wait[5s]

$deleteRecords[metaXP]
$deleteRecords[messageMonth]
$deleteRecords[votesMonth]
$deleteRecords[pdaMonth]
$deleteRecords[invitesMonth]

$deleteRecords[membersJoinedMonth]
$deleteRecords[guildMonthMessages]

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

;0 0 1 * *;America/Recife]

$cron[
$deleteRecords[guildWeeklyMessage]
$deleteRecords[messageWeekly]
;0 0 * * 0;America/Recife]

$cron[
$deleteRecords[guildTodayMessage]
$deleteRecords[messageToday]
;0 0 * * *;America/Recife]
 
 `
}