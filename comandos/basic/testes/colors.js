module.exports = [{
    name: "update-colors",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$deleteCommand

$addTextDisplay[## SIMPLESMENTE CORES!
Escolha uma cor que mais combina com você!]
$addActionRow
$addStringSelectMenu[colors;Escolha uma cor;false;1;1]
$addOption[Simplesmente azul;Azul geralmente remete a tristeza, mas o Winder discorda.;azul;🔵;false]
$addOption[Simplesmente rosa;As quartas feiras nós utilizamos rosa, mas você pode usar hoje se quiser.;rosa;🌹;false]
$addOption[Simplesmente vermelho;Tu viu aquela menina de vermelho?;vermelho;🔴;false]
$addOption[Simplesmente laranja;Citrico;laranja;🟠;false]
$addOption[Simplesmente verde;A cor da esperança;verde;🟢;false]
$addOption[Simplesmente roxo;A cor roxa significa amor em alguns lugares.;roxo;🟣;false]
    
`
},{
    type: "interactionCreate",
    name: "colors",
    code: `$ephemeral $disableAllMentions
$jsonLoad[cores;{
  "rosa": "1462932846795690138",
  "verde": "1462931874656682206",
  "ciano": "1463183062828454001",
  "vermelho": "1462931775641878578",
  "amarelo": "1462931954771955742",
  "roxo": "1463277399436296348",
  "laranja": "1462932934485868726",
  "azul": "1462932753388408904"
}
]

$arrayLoad[coresID;,;$jsonValues[cores;,]]

$arrayForEach[coresID;id]

$!memberAddRoles[$guildID;$authorID;$env[cores;$selectMenuValues]]

$interactionReply[Pronto! Você está usando a cor <@&$env[cores;$selectMenuValues]>!]
    
`
}]