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
$setGuildIcon[$get[logo];861313067291115541]

$channelSendMessage[$getGuildVar[consoleChat];{newEmbed:
{author:Patinhas Brand Update (light_logo)}
{description:
Link usado: $get[logo]
}
{thumbnail:$get[logo]}
{color:Blue}
}
]

$writeFile[Recursos/design/welcome.txt;https://i.ibb.co/FVKgJmf/winder-welcome-light.png;utf8]

$let[logo;https://cdn.discordapp.com/attachments/785632865709981756/1466111624036483164/IMG_20260128_134209.png?ex=697b8e5a&is=697a3cda&hm=6d6b00fe5f184005ce940fbc599cd07c61d42aa56f7ce5a77aaa54890c3ed93c&]

$onlyIf[$getGuildVar[guildIconDefault;$guildID]==true;]
`
},{
name: "dark_logo",
type: "awaited",
code: `
$setGuildIcon[$get[logo];861313067291115541]

$channelSendMessage[$getGuildVar[consoleChat];{newEmbed:
{author:Patinhas Brand Update (dark_logo)}
{description:
Link usado: $get[logo]

}
{thumbnail:$get[logo]}
{color:Blue}
}
]

$writeFile[Recursos/design/welcome.txt;https://i.ibb.co/2PP39GP/winder-welcome-dark.png;utf8]

$let[logo;https://cdn.discordapp.com/attachments/785632865709981756/1466111624451592344/IMG_20260128_134105.png?ex=697b8e5a&is=697a3cda&hm=aa9c906c009055b14f06250320716af6039a71651409e454ca0f0a46c372fcdb&]]

$onlyIf[$getGuildVar[guildIconDefault;$guildID]==true;]
`
}]


//light: 
//dark: 
