module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]==$authorID;]
$cooldown[$guildID;1m]

$reply[$channelID;$messageID]

$ifx[
$if[$checkContains[$toLowerCase[$message];bom dia;dia;bd;good morning;dia bom;bueno dias;buenos dia;buenos dias;gm]==true;
$startTyping[$channelID]
$sendMessage[$channelID;Bom dia! $randomText[💙;:3;>w<;😀;😆;👋;🥰]]
]
$elseIf[$checkContains[$toLowerCase[$message];boa noite;good night;buenos noite;bueno noite;noite boa;boa noit;gn;bn]==true;
$startTyping[$channelID]
$sendMessage[$channelID;Boa noite! $randomText[]]
]

]
`
}