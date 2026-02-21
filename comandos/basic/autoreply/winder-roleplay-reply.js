module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]==$clientID;]

$ifx[
$if[$checkContains[*$toLowerCase[$message]*;abraço;abraça;hug]==true;

$cooldown[$authorID;1m]
$startTyping[$channelID]
$wait[2s]

$sendMessage[$randomText[*Fica com raiva* >:(;*Morde de volta* :3;*Corre* :(]]

]
$elseif[$checkContains[$toLowerCase[$message];miau;meow;meeooww;meeow;meoow;meoww;miiau;miaau;miauu;meeeooowww]==true;

$cooldown[$authorID;1m]
$startTyping[$channelID]
$wait[2s]

$sendMessage[$channelID;$randomText[Miau;Meow;Meeooww;Meeow;Meoow;Meoww;Miiau;Miaau;Miauu]! OwO]

]
$elseif[$checkContains[*$toLowerCase[$message]*;ronrona]==true;
$cooldown[$authorID;1m]
$startTyping[$channelID]
$wait[2s]

$sendMessage[$channelID;Que fofinho! :3]

]
$elseif[$checkContains[*$message$toLowerCase[$message]*;cafuné;pat;pet;carinho]==true;
$cooldown[$authorID;1m]
$startTyping[$channelID]
$wait[2s]

$sendMessage[$channelID;$randomText[*Ronrona* -w-;*Pula em seu colo* uwu]]

]
$elseif[$checkContains[*$toLowerCase[$message]*;morde;mordida;bite]==true;
$cooldown[$authorID;1m]
$startTyping[$channelID]
$wait[2s]

$sendMessage[$channelID;$randomText[*Fica com raiva* >:(;*Morde de volta* :3;*Corre* :(]]


]
$elseif[$checkContains[*$toLowerCase[$message]*;boop]==true;
$cooldown[$authorID;1m]
$startTyping[$channelID]
$wait[2s]

$sendMessage[$channelID;Boop! >w<]

]
]
`,
nonprefixed: true
}