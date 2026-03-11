module.exports = [{
    name: "colors",
    type: "clientReady",
    code: `$deleteMessage[1470875996356874292;$getGlobalVar[cores_messageID]]
$let[msgID;$sendMessage[1470875996356874292;
$addTextDisplay[## 🎨 SIMPLESMENTE CORES!
🔵🔴🟠🟡🟢🟣
Escolha uma cor que mais combina com você!]
$addActionRow
$addStringSelectMenu[colors;Escolha uma cor;false;1;1]
$addOption[Simplesmente nada;Remove todas as cores e usa a de outro cargo mais alto.;remove;❌;false]
$addOption[Simplesmente azul;Azul geralmente remete a tristeza, mas o Winder discorda.;azul;🔵;false]
$addOption[Simplesmente rosa;As quartas feiras nós utilizamos rosa, mas você pode usar hoje se quiser.;rosa;🌹;false]
$addOption[Simplesmente amarelo;Amarelo, a cor do ouro;amarelo;🟡;false]
$addOption[Simplesmente vermelho;Tu viu aquela menina de vermelho?;vermelho;🔴;false]
$addOption[Simplesmente laranja;Citrico;laranja;🟠;false]
$addOption[Simplesmente verde;A cor da esperança;verde;🟢;false]
$addOption[Simplesmente roxo;A cor roxa significa amor em alguns lugares.;roxo;🟣;false]
;true]]

$setGlobalVar[cores_messageID;$get[msgID]]
`
},{
    type: "interactionCreate",
    name: "colors",
    code: `$ephemeral $disableAllMentions
$jsonLoad[cores;{
  "rosa": "1462932846795690138",
  "verde": "1462931874656682206",
  "vermelho": "1462931775641878578",
  "amarelo": "1462931954771955742",
  "roxo": "1463277399436296348",
  "laranja": "1462932934485868726",
  "azul": "1462932753388408904"
}
]
$if[$selectMenuValues!=remove;

$arrayLoad[coresID;,;$jsonValues[cores;,]]

$arrayForEach[coresID;id;
$!memberRemoveRoles[$guildID;$authorID;$env[id]]
]

$!memberAddRoles[$guildID;$authorID;$env[cores;$selectMenuValues]]

$interactionReply[Pronto! Você está usando a cor <@&$env[cores;$selectMenuValues]>!];
$arrayLoad[coresID;,;$jsonValues[cores;,]]

$arrayForEach[coresID;id;
$!memberRemoveRoles[$guildID;$authorID;$env[id]]
]

$interactionReply[Todas as cores foram removidas!]
]
    
`
}]