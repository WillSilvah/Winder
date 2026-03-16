module.exports = {
    type: 'clientReady',
    code: `
$let[guildID;1462224054676099094]
$cron[

$setGuildVar[guildActivityMedia;$media[messageMonth;$getMemberLeaderboardLength[messageMonth;$guildID]];$get[guildID]]

$wait[5s]

$deleteRecords[metaXP]
$deleteRecords[messageMonth]
$deleteRecords[votesMonth]
$deleteRecords[pdaMonth]
$deleteRecords[invitesMonth]

$deleteRecords[membersJoinedMonth]
$deleteRecords[guildMonthMessages]

;0 0 1 * *;America/Recife]

$cron[
$deleteRecords[guildWeeklyMessage]
$deleteRecords[messageWeekly]
$deleteRecords[tempMessageWeekly]
;0 0 * * 0;America/Recife]

$cron[
$deleteRecords[guildTodayMessage]
$deleteRecords[messageToday]
$deleteRecords[tempMessageToday]
;0 0 * * *;America/Recife]

    $cron[
    $setGlobalVar[sleepMode;false]
    ;34 6 * * *;America/Recife]
    
    $cron[
    $setGlobalVar[sleepMode;true]
    ;0 22 * * *;America/Recife]
 
 `
}
