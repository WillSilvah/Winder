module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$isBot==false;]

$timezone[America/Recife]
$setGuildVar[guildMonthMessages;$sum[$getGuildVar[guildMonthMessages];1]]
$setGuildVar[guildTotalMessages;$sum[$getGuildVar[guildTotalMessages];1]]

$setGuildVar[lastUserSendMessage;$authorID]
$setMemberVar[lastMessage;$message;$authorID]
$setMemberVar[lastMessageTime;$hour:$minute:$second - $day/$month/$year]
$setMemberVar[lastMessageChannel;$channelID]

$setMemberVar[messageMonth;$sum[$getMemberVar[messageMonth;$authorID];1]]
$setMemberVar[messageTotal;$sum[$getMemberVar[messageTotal;$authorID];1]]

$if[$channelID==1462224055884189781;
$setGuildVar[msgPerMinute;$sum[$getGuildVar[msgPerMinute];1]]
]

`
}