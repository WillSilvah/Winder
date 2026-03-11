module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]==$authorID;]

$reply[$channelID;$messageID]

$if[$getGlobalVar[sleepMode]==true;
$reply
$sendMessage[$channelID;**$userTag[$mentioned[0]]** está afk!
$author[Purrrrrrrr.... Estou dormindo no momento, até breve!]
$color[Red]
]
$stop;
]

$ifx[
$if[$checkContains[$toLowerCase[$message];bom dia;dia;bd;good morning;dia bom;bueno dias;buenos dia;buenos dias;gm]==true;
$startTyping[$channelID]
$sendMessage[$channelID;Bom dia! $randomText[💙;:3;>w<;😀;😆;👋;🥰]]
]
$elseIf[$checkContains[$toLowerCase[$message];boa noite;good night;buenos noite;bueno noite;noite boa;boa noit;gn;bn]==true;
$startTyping[$channelID]
$sendMessage[$channelID;Boa noite! $randomText[💙;😴;🫩;🤗]]
]
$elseIf[$checkContains[$toLowerCase[$message];boa tard;boa tarde;good afternoon;btarde;buenos tardes;bueno tarde;tarde boa]==true;
$startTyping[$channelID]
$sendMessage[$channelID;Boa tarde! $randomText[💙;👋;😘;😍;🤩;🥳;🙃;🤗]]
]
]
`
}