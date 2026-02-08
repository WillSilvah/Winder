module.exports = [{
name: "joinCommand",
type: "join",
channel: "1462224055884189781",
code: `
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]

$onlyIf[$guildID==1462224054676099094;]
$cacheMembers[$guildID;false]

`
}]