module.exports = [{
    name: "update-colors",
    type: "messageCreate",
    code: `
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

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
    code: `
$sendMessage[781665851040333844;
Command name: $commandName
Message: $message
FocusedOptionName: $focusedOptionName
FocusedOptionValue: $focusedOptionValue
customid: $customID
Input: $input[colors]
]
    
`
}]