module.exports = [{
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]!=$authorID;]
$onlyIf[$getUserVar[afkStatus;$mentioned[0];false]==true;]

$sendMessage[$channelID;<@$authorID> **$userTag[$mentioned[0]]** está afk!
$if[$getUserVar[afkReason]!=;
$author[$getUserVar[afkReason;$mentioned[0]]]
$color[Red]
]
$deleteIn[15s]
]

$if[$getUserVar[afkNotify;$mentioned[0];false]==true;
$sendDM[$mentioned[0];
$title[@$username[$authorID] mencionou você enquanto AFK!]
$description[
$message

$if[$messageAttachments[$channelID;$messageID;, ]!=;> **Anexos:**
$messageAttachments[$channelID;$messageID;, ]
]
]
$footer[Servidor: $guildName[$guildID] | Canal: $channelName[$channelID]]
$color[Red]
$thumbnail[$userAvatar[$authorID]]

$addActionRow
$addButton[$messageLink[$channelID;$messageID];Ir para a mensagem;Link;💬;false]

]
]

`
},{
    type: "messageCreate",
    code: `
$onlyIf[$getUserVar[afkStatus;$authorID;false]==true;]

$sendMessage[$channelID;<@$authorID> Olá, que bom que você voltou! ❤️]

$!memberSetNickname[$guildID;$authorID;$replaceText[$nickname[$guildID;$authorID];(AFK) ;]]

$setUserVar[afkStatus;false;$authorID]
$setUserVar[afkReason;;$authorID]

    
`
}]