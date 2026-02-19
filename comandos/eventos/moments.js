module.exports = {
 type: 'clientReady',
 code: `
 $cron[
 $deleteMemberVar[metaXP]
$deleteMemberVar[messageMonth]
$deleteMemberVar[votesMonth]
$deleteMemberVar[msgXP]

$deleteGuildVar[membersJoinedMonth]
$deleteGuildVar[guildMonthMessages]
;0 0 1 * *;America/Recife]
 
 `
 }