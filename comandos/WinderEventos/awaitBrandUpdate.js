module.exports = [{
name: "awaitBrandUpdate",
type: "loop",
channel: "$getGuildVar[consoleChat]",
executeOnStartup: "false",
every: 999,
code: `
$ifAwaited[$hour:$minute:$second==06:00:00;{execute:light_logo}]
$ifAwaited[$hour:$minute:$second==09:00:00;{execute:light_logo}]
$ifAwaited[$hour:$minute:$second==12:00:00;{execute:light_logo}]
$ifAwaited[$hour:$minute:$second==15:00:00;{execute:light_logo}]

$ifAwaited[$hour:$minute:$second==18:00:00;{execute:dark_logo}]
$ifAwaited[$hour:$minute:$second==21:00:00;{execute:dark_logo}]
$ifAwaited[$hour:$minute:$second==00:00:00;{execute:dark_logo}]
$ifAwaited[$hour:$minute:$second==03:00:00;{execute:dark_logo}]

$timezone[America/Recife]
`
},{
name: "light_logo",
type: "awaited",
code: `
$setGuildIcon[$get[logo];1462224054676099094]

$channelSendMessage[$getGuildVar[consoleChat];{newEmbed:
{author:Patinhas Brand Update (light_logo)}
{description:
Link usado: $get[logo]
}
{thumbnail:$get[logo]}
{color:Blue}
}
]

$let[logo;https://ibb.co/vx5gt7zP]

$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
`
},{
name: "dark_logo",
type: "awaited",
code: `
$setGuildIcon[$get[logo];1462224054676099094]

$channelSendMessage[$getGuildVar[consoleChat];{newEmbed:
{author:Patinhas Brand Update (dark_logo)}
{description:
Link usado: $get[logo]

}
{thumbnail:$get[logo]}
{color:Blue}
}
]

$let[logo;https://ibb.co/LhkJfCGJ]

$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
`
}]


//light: 
//dark: 
