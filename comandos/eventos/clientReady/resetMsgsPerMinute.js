module.exports = {
 type: 'clientReady',
 code: `
$setInterval[
$setGuildVar[oldMsgPerMinute;$default[$getGuildVar[msgPerMinute;$getGlobalVar[guildID]];0];$getGlobalVar[guildID]]
$wait[5s]
$deleteRecords[msgPerMinute];1m;resetMsgsPerMinute]

`
}
