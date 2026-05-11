module.exports = {
 type: 'clientReady',
 code: `
    $let[guildID;$getGlobalVar[guildID]]
    
    $setInterval[
     $setGuildVar[oldMsgPerMinute;$default[$getGuildVar[msgPerMinute;$get[guildID]];0];$get[guildID]]
     
     $setGuildVar[msgPerMinuteMonth;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]: $default[$getGuildVar[msgPerMinute;$get[guildID]];0] mensagens por minuto\n$getGuildVar[msgPerMinuteMonth]]
     
    $wait[5s]
    $deleteRecords[msgPerMinute]
;1m;resetMsgsPerMinute]

`
}
