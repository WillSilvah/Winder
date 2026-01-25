module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[$toLowercase[$message];bom dia;good morning;bdiaa;buenos dias;bueno dia;dia bom]==true;
{execute:sudBomDia}
]

$ifAwaited[$checkContains[$toLowercase[$message];boa tarde;good afternoon;btarde;buenos tardes;bueno tarde;tarde boa]==true;
{execute:sudBoaTarde}]

$ifAwaited[$checkContains[$toLowercase[$message];boa noite;good night;buenos noite;bueno noite;noite boa;boa noit]==true;
{execute:sudBoaNoite}]

$ifAwaited[$checkContains[$message;psps]==true;{execute:sudPsps}]

$onlyIf[$argsCount<4;]
$onlyIf[$mentioned[1]==$authorID;]
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "sudPsps",
type: "awaited",
code: `
$randomText[Miau;Meow;Meeooww;Meeow;Meoow;Meoww;Miiau;Miaau;Miauu]! OwO

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "sudBomDia",
type: "awaited",
code: `
Bom Dia! 💙
$clientTyping
$reply
$cooldown[5m;]
$onlyIf[$mentioned[1]==$authorID;]
`
},{
name: "sudBoaTarde",
type: "awaited",
code: `
Boa tarde! ⭐
$clientTyping
$reply
$cooldown[5m;]
$onlyIf[$mentioned[1]==$authorID;]
`
},{
name: "sudBoaNoite",
type: "awaited",
code: `
Boa noite! 💙
$clientTyping
$reply
$cooldown[5m;]
$onlyIf[$mentioned[1]==$authorID;]
`
},{
name: "sudOlá",
type: "awaited",
code: `
$randomText[Olá! 👋;Oi! 😀;Hey! 😎]

$clientTyping
$reply
$cooldown[5m;]
$onlyIf[$argsCount==1;]
$onlyIf[$mentioned[1]==$authorID;]
`
}]
