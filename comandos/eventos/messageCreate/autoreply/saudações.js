module.exports = {
    type: "messageCreate",
    code: `
    $if[$getGlobalVar[sleepMode]==true;$stop]
$onlyIf[$mentioned[0]==$clientID;]

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