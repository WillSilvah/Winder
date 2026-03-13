module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$isBot==false;]
$timezone[America/Recife]

$setMemberVar[messages;$getMemberVar[messages]]

$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit] | $message]

$onlyIf[$includes[$channelID;1478505120525324541]==false;]

$setGuildVar[guildMonthMessages;$sum[$getGuildVar[guildMonthMessages;$guildID;0];1]]
$setGuildVar[guildTotalMessages;$sum[$getGuildVar[guildTotalMessages;$guildID;0];1]]
$setGuildVar[guildWeeklyMessages;$sum[$getGuildVar[guildWeeklyMessages;$guildID;0];1]]
$setGuildVar[guildTodayMessages;$sum[$getGuildVar[guildTodayMessages;$guildID;0];1]]

$setGuildVar[lastUserSendMessage;$authorID]
$setMemberVar[lastMessage;$message;$authorID]
$setMemberVar[lastMessageTime;$hour[TwoDigit]:$minute[TwoDigit]:$second[TwoDigit] - $day[TwoDigit]/$month[TwoDigit]/$year[TwoDigit]]
$setMemberVar[lastMessageTimestamp;$getTimestamp]
$setMemberVar[lastMessageChannel;$channelID]

$setMemberVar[messageMonth;$sum[$getMemberVar[messageMonth;$authorID;$guildID;0];1]]
$setMemberVar[messageWeekly;$sum[$getMemberVar[messageWeekly;$authorID;$guildID;0];1]]
$setMemberVar[messageToday;$sum[$getMemberVar[messageToday;$authorID;$guildID;0];1]]
$setMemberVar[messageTotal;$sum[$getMemberVar[messageTotal;$authorID;$guildID;0];1]]

$if[$channelID==1462224055884189781;
$setGuildVar[msgPerMinute;$sum[$getGuildVar[msgPerMinute;$guildID;0];1]]
]

`
}