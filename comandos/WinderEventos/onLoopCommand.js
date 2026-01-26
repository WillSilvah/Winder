//$day = Retorna o nome da semana
//$hour:$minute:$second-$date/$formatDate[$dateStamp;MM]/$year
module.exports = [{
name: "loopCommand",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 999,
code: `
$ifAwaited[$hour:$minute:$second==00:00:00;{execute:novodia}]

$ifAwaited[$hour:$minute:$second==19:00:00;{execute:chat-boanoite}]
$ifAwaited[$hour:$minute:$second==13:10:00;{execute:chat-boatardefim}]
$ifAwaited[$hour:$minute:$second==12:10:00;{execute:chat-boatarde}]
$ifAwaited[$hour:$minute:$second==07:00:00;{execute:chat-bomdia}]

$timezone[America/Recife]
`
},{
name: "novodia",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;{newEmbed:
{author:Um novo dia começou...}
{description:
Que $day seja um dia incrível para você.
}
{color:$dyColor[blue;light]}
}]
        
$timezone[America/Recife]
`
},{
name: "chat-bomdia",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🌞 BOM DIA PINWHEEL!
**Vamos levantar e tomar um café ☕?**
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