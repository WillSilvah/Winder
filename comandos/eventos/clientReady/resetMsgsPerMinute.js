module.exports = {
 type: 'clientReady',
 code: `
$setInterval[
$setGuildVar[oldMsgPerMinute;$getGuildVar[msgPerMinute;$getGlobalVar[guildID]];$getGlobalVar[guildID]]

$deleteRecords[msgPerMinute]
;1m;resetMsgsPerMinute]

`
}
