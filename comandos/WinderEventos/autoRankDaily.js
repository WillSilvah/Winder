module.exports = [{
name: "autoRankDaily",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 10000,
code: `
$channelSendMessage[1466734269572579399;Acabei de postar uma atualização lá no <#1466734269572579399>, você está no rank?]

$channelSendMessage[1466734269572579399;{newEmbed:
{author:$getObjectProperty[session;name]:https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
{title:Top fofoqueiros ativos}
{description:
$userLeaderBoard[1462224054676099094;msgXP;desc;{top}° **<@{id}>** -> ✨️{value};11;1]

$userLeaderBoard[1462224054676099094;messageMonth;desc;{top}° **<@{id}>** -> 💬️{value};11;1]
}
{footer:Atualizado sempre às 22h | w!rank}
{color:Green}
}]

$createObject[session;$readFile[Recursos/session.json]]

$clear[$getGuildVar[rankedChat;1462224054676099094];6]


`
}]