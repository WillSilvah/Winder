module.exports = {
 type: 'clientReady',
 code: `
$cron[$deleteRecords[msgPerMinute;;guild];* * * * *]

`
}
