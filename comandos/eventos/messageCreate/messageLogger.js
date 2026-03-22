module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getMemberVar[privacyMode;$authorID;$guildID;false]==false;]
    $timezone[America/Recife]
    $setMemberVar[messageLogToday;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] | M: $messageID | C: $channelID\n$message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getMemberVar[messageLogToday]]
    $setMemberVar[messageLogWeekly;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] | M: $messageID | C: $channelID\n$message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getMemberVar[messageLogWeekly]]
    
    $setMemberVar[messageLogMonth;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] | M: $messageID | C: $channelID\n$message$if[$messageAttachments[$channelID;$messageID]!=;\n$messageAttachments[$channelID;$messageID;\n];]\n$getMemberVar[messageLogMonth]]
`
}]

