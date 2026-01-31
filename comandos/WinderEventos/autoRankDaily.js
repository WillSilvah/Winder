module.exports = [{
name: "autoRankDaily",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 999,
code: `

$ifAwaited[$hour:$minute:$second==22:00:00;{execute:autoRankDaily}]
$timezone[America/Recife]
`
},{
name: "autoRankDaily",
type: "awaited" 
code: `
$channelSendMessage[$getGuildVar[batePapo;1462224054676099094];Acabei de postar uma atualização lá no <#1466734269572579399>, você está no rank?]

$channelSendMessage[$getGuildVar[rankedChat;1462224054676099094];{newEmbed:
{author:$getObjectProperty[session;name]:https://abs.twimg.com/emoji/v2/72x72/1f4ac.png}
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