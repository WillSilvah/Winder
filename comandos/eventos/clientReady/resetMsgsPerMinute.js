module.exports = {
 type: 'clientReady',
 code: `
    $timezone[America/Recife]
    $let[guildID;$getGlobalVar[guildID]]
    
    $setInterval[
     $setGuildVar[oldMsgPerMinute;$default[$getGuildVar[msgPerMinute;$get[guildID]];0];$get[guildID]]
     
     $setGuildVar[msgPerMinuteMonth;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]: $default[$getGuildVar[msgPerMinute;$get[guildID]];0] mensagens por minuto e $getMemberLeaderboardLength[memberIsTalking?] membros estão conversando na hora | $math[$guildMemberCount[$get[guildID];online;false]+$guildMemberCount[$get[guildID];dnd;false]+$guildMemberCount[$get[guildID];idle;false]] usuários estão online no Discord \n$getGuildVar[msgPerMinuteMonth;$get[guildID]];$get[guildID]]
     
    $wait[5s]
    $deleteRecords[msgPerMinute]
;1m;resetMsgsPerMinute]

    $cron[
     $deleteRecords[memberIsTalking?]
    ;0 * * * *]

`
}
