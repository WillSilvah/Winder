module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getMemberVar[privacyMode;$authorID;$guildID;false]==false;]
    $timezone[America/Recife]
    $setMemberVar[messageLogToday;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]| $messageID/$channelID | $message\n$getMemberVar[messageLogToday]]
    $setMemberVar[messageLogWeekly;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]| $messageID/$channelID | $message\n$getMemberVar[messageLogWeek]]
    $setMemberVar[messageLogMonth;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]| $messageID/$channelID | $message\n$getMemberVar[messageLogMonth]]
`
}]

