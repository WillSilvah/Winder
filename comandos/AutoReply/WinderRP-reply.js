module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[*$message*;abraço;abraça;hug]==true;
{execute:rp-reply-hug}
]
$ifAwaited[$checkContains[$message;miau;meow;meeooww;meeow;meoow;meoww;miiau;miaau;miauu;meeeooowww]==true;
{execute:rp-reply-meow}
]
$ifAwaited[$checkContains[*$message*;ronrona]==true;
{execute:rp-reply-ronrona}
]
$ifAwaited[$checkContains[*$message*;cafuné;pat;pet;carinho]==true;
{execute:rp-reply-pat}
]
$ifAwaited[$checkContains[*$message*;morde;mordida;bite]==true;
{execute:rp-reply-morde}
]


$onlyIf[$mentioned[1]==$clientID;]
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "rp-reply-hug",
type: "awaited",
code: `
$randomText[*Abraço você* >w<;*Abraço de volta* >w<;*Abraça e ronrona* UwU]

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-meow",
type: "awaited",
code: `
$randomText[Miau;Meow;Meeooww;Meeow;Meoow;Meoww;Miiau;Miaau;Miauu]! OwO

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-ronrona",
type: "awaited",
code: `
Que fofinho! :3

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-pat",
type: "awaited",
code: `
$randomText[*Ronrona* -w-;*Pula em seu colo* uwu]

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-morde",
type: "awaited",
code: `
$randomText[*Fica com raiva* >:(;*Morde de volta* :3;*Corre* :(]

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
}]