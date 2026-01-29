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

$let[logo;https://cdn.discordapp.com/attachments/785632865709981756/1466111624036483164/IMG_20260128_134209.png?ex=697cdfda&is=697b8e5a&hm=ae707c072307d6ea770d77cc8dda0edbdc548a7314ed08175e9398e21e6bda44&]

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

$let[logo;https://cdn.discordapp.com/attachments/785632865709981756/1466111624451592344/IMG_20260128_134105.png?ex=697cdfda&is=697b8e5a&hm=78a23b9e4c1c10136613551653e4cc885f2df01d30479f60bc2372a2312b908b&]

$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
`
}]


//light: 
//dark: 
