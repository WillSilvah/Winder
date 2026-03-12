module.exports = {
 type: 'clientReady',
 code: `
$setInterval[
$setGuildVar[oldMsgPerMinute;$getGuildVar[msgPerMinute;$getGlobalVar[guildID]];$getGlobalVar[guildID]]

$wait[5s]

$deleteRecords[msgPerMinute;1m;resetMsgsPerMinute]

`
}
