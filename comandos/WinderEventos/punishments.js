module.exports = [{
name: "puni-dm",
type: "awaited",
code: `
$title[1;$customEmoji[pats_foxBan] Você foi $get[puniType];https://www.bing.com/search?q=O%20que%20s%C3%A3o%20regras%3F&pc=MOZB&form=MOZMBA]
$description[1;
$addField[1;💀 Motivo;$get[reason]]

$addField[1;🛡️ Punido por;$userTag[$get[staffID]]]
]
$thumbnail[1;$userAvatar[$get[staffID]]]
$color[1;Orange]
$footer[1;Equipe Patinhas: Nossa toca, tem regras.]

$addButton[1;Apelo de desbanimento;link;https://dyno.gg/form/8e826f68https://dyno.gg/form/8e826f68;<:pats_foxBan:1466597066892640456>]

$dm[$get[userID]]
`
},{
name: "punishment-log",
type: "awaited",
code: `

$author[1;Equipe Patinhas: Nossa toca, tem regras.;https://cdn.discordapp.com/emojis/1466597066892640456.png?size=2048]
$title[1;$userTag[$get[userID]] | $get[puniType]]
$description[1;
$addField[1;💀 Motivo;$get[reason]]

$addField[1;🛡️ Punido por;<@$get[staffID]>]
]
$color[1;Orange]
$thumbnail[1;$userAvatar[$get[userID]]]
$addButton[1;Ver perfil;link;discord://-/users/$get[userID];false;👀]

$useChannel[$getGuildVar[punishmentLog]]
`
}]