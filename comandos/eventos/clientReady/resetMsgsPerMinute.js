module.exports = {
 type: 'clientReady',
 code: `
$setInterval[
$wait[5s]
$deleteRecords[msgPerMinute;;guild];1m;resetMsgsPerMinute]

`
}
