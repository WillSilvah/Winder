module.exports = [{
name: "$alwaysExecute",
code: `
$setGuildVar[msgPerMinute;$sum[$getGuildVar[msgs;1462224054676099094];1];1462224054676099094]

$onlyIf[$channelID==1462224055884189781;]

$setGlobalUserVar[messageMonth;$sum[$getGlobalUserVar[messageMonth;$authorID];1];$authorID]
$setGlobalUserVar[messageTotal;$sum[$getUserVar[messageTotal;$authorID];1];$authorID]

$setGuildVar[lastUserSendMessage;$authorID;1462224054676099094]

$setGlobalUserVar[lastMessage;$message;$authorID]
$setGlobalUserVar[lastMessageTime;$hour:$minute:$second - $date/$formatDate[$dateStamp;MM]/$year;$authorID]
$setGlobalUserVar[lastMessageChannel;$channelID;$authorID]

$timezone[America/Recife]
$setGuildVar[guildMonthMessages;$sum[$getGuildVar[guildMonthMessages;1462224054676099094];1];1462224054676099094]

$onlyForGuilds[1462224054676099094;]
$onlyIf[$isBot==false;]
$cooldown[1s;]
`
}]