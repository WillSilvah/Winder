module.exports = [{
name: "resetMsgs",
type: "loop",
channel: "1468237433337544877",
executeOnStartup: "true",
every: 65000,
code: `
$setGuildVar[msgPerMinute;0;$guildID]

$sendMessage[{newEmbed:
{author:Mensagens por minuto: $getGuildVar[msgPerMinute;$guildID]}
{color:Random}
}
]
`

}]
