module.exports = [{
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]!=$authorID;]
$onlyIf[$getUserVar[afkStatus;$mentioned[0]]==true;]

$sendMessage[$channelID;<@$authorID> **$userTag[$mentioned[0]]** está afk!
$author[$getUserVar[afkReason;$mentioned[0]]]
$color[Red]
]

$if[$getUserVar[afkNotify;$mentioned[0]]==true;
$sendDM[$mentioned[0];
$title[@$username[$authorID] mencionou você enquanto AFK!]
$description[
$message
]
$footer[Servidor: $guildName[$guildID] | Canal: $channelName[$channelID]]
$color[Red]

$addActionRow
$addButton[$messageLink[$channelID;$messageID];Ir para a mensagem;Link;💬;false]

]
]

`
},{
    type: "messageCreate",
    code: `
$onlyIf[$getUserVar[afkStatus;$authorID]==true;]

$sendMessage[$channelID;<@$authorID> | Olá, que bom que você voltou! ❤️]

$setUserVar[afkStatus;false;$authorID]
$setUserVar[afkReason;;$authorID]

    
`
}]