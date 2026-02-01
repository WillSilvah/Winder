//$day = Retorna o nome da semana
//$hour:$minute:$second-$date/$formatDate[$dateStamp;MM]/$year
module.exports = [{
name: "loopCommand",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 999,
code: `
$ifAwaited[$date-$hour:$minute:$second==01-00:00:00;{execute:auto-reset}]


$timezone[America/Recife]
`
},{
name: "auto-rank-daily",
type: "awaited",
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
{color:Green}]

$createObject[session;$readFile[Recursos/session.json]]

$clear[$getGuildVar[rankedChat;1462224054676099094];6]

`
},{
name: "auto-reset",
type: "awaited",
code: `
$resetUserVar[metaXP]

$resetUserVar[messageMonth]

$resetUserVar[votesMonth]

$resetUserVar[msgXP]

$resetGuildVar[guildMonthMessages]

$writeFile[Recursos/session.json;
{
    "name": "Pré Temporada: O começo",
    "nameShort": "PRÉ: O começo",
    "banner": "https://i.ibb.co/7NXHgpxQ/banner-pr-temporada.png"
};utf8]

`
},{
name: "novodia",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;{newEmbed:
{author:Um novo dia começou...}
{description:
Que este seja um dia incrível para você.
}
{color:Blue}
}]
        
$timezone[America/Recife]
`
},{
name: "chat-bomdia",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🌞 BOM DIA PELUDOS!
**Vamos levantar e tomar uma xícara de café?**
]
`
},{
name: "chat-boatarde",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🍱 JÁ PODE ALMOÇAR!
**Liberei o almoço, vão almoçar enquanto dá tempo!**
]
`
},{
name: "chat-boatardefim",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🍱 FIM DO ALMOÇO
**Permissão para almoçar foi cancelada.**
]
`
},{
name: "chat-boanoite",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🌃 BOA NOITE
**Vamos finalizar a noite conversando com os amigos?**
]
`
}]