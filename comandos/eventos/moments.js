module.exports = [{
    name: "resetTemporada",
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
},{
    name: "saudações",
    type: "clientReady",
    code: `
$cron[$sendMessage[$getGuildVar[$batePapo];



];0 6 * * *;America/Recife]    
    
    
`
}]