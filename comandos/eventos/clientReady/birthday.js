module.exports = [{
    type: "clientReady",
    code: `
    $let[guildID;1462224054676099094]
$cron[
$arrayLoad[birthday;, ;$guildMemberIDs[$get[guildID]]]
$arrayForEach[birthday;id;
$if[$getMemberVar[birthday]==$day[TwoDigit/$month[TwoDigit]];

$sendMessage[$getGuildVar[batePapo;$get[guildID]];
$addSection[
$addTextDisplay[## 🎂<@$env[id]> ESTÁ FAZENDO $math[$year-$getMemberVar[birthdayYear;$env[id]]] ANOS HOJE!]
$addThumbnail[$userAvatar[$env[id]]]
]
$addSeparator[Large;true]
]

$sendMessage[


]

]
]


;0 7 * * *;America/Recife]
    
    
`
}]