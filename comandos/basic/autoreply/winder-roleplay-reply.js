module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]==$clientID;]

$cooldown[$authorID;1m]

$ifx[
$if[$checkContains[*$toLowerCase[$message]*;abraço;abraça;hug]==true;


$startTyping[$channelID]
$wait[2s]
$reply
$sendMessage[$channelID;$randomText[*Abraço você* >w<;*Abraço de volta* >w<;*Abraça e ronrona* UwU]]

]
$elseif[$checkContains[$toLowerCase[$message];miau;meow;meeooww;meeow;meoow;meoww;miiau;miaau;miauu;meeeooowww]==true;


$startTyping[$channelID]
$wait[2s]
$reply
$sendMessage[$channelID;$randomText[Miau;Meow;Meeooww;Meeow;Meoow;Meoww;Miiau;Miaau;Miauu]! OwO]

]
$elseif[$checkContains[*$toLowerCase[$message]*;ronrona]==true;

$startTyping[$channelID]
$wait[2s]
$reply
$sendMessage[$channelID;Que fofinho! :3]

]
$elseif[$checkContains[*$message$toLowerCase[$message]*;cafuné;pat;pet;carinho]==true;

$startTyping[$channelID]
$wait[2s]
$reply
$sendMessage[$channelID;$randomText[*Ronrona* -w-;*Pula em seu colo* uwu]]

]
$elseif[$checkContains[*$toLowerCase[$message]*;morde;mordida;bite]==true;

$startTyping[$channelID]
$wait[2s]
$reply
$sendMessage[$channelID;$randomText[*Fica com raiva* >:(;*Morde de volta* :3;*Corre* :(]]


]
$elseif[$checkContains[*$toLowerCase[$message]*;boop]==true;

$startTyping[$channelID]
$wait[2s]
$reply
$sendMessage[$channelID;Boop! >w<]

]
]
`
}