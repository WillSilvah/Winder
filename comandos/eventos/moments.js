module.exports = {
    type: 'clientReady',
    code: `
$let[guildID;1462224054676099094]
$cron[

$setGuildVar[guildPDAmedia;media[messageMonth;11];$get[guildID]]

$wait[5s]

$deleteRecords[metaXP]
$deleteRecords[messageMonth]
$deleteRecords[votesMonth]
$deleteRecords[pdaMonth]

$deleteRecords[membersJoinedMonth]
$deleteRecords[guildMonthMessages]
;0 0 1 * *;America/Recife]

$cron[
$deleteRecords[guildWeeklyMessage]
$deleteRecords[messageWeekly]
;0 0 * * 0]

$cron[
$deleteRecords[guildTodayMessage]
$deleteRecords[messageToday]
;0 0 * * *]
 
 `
}