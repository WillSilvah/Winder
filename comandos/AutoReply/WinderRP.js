module.exports = [{
name: "$alwaysExecute",
code: `
$randomText[$randomText[Miau;Meow;Meooww;Miaauu]! :3;*lambe você* >w<;*abraça você* >w<;*sniff sniff* 👃 $randomText[Vai tomar banho!!; Está de banho tomado, parabéns!;Que cheiro é esse?];*se esfregando em suas pernas e ronrona* UwU;*boop! OwO*;*morde você* >:3;*pat pat* OwO;*cafuné* OwO;*morde você* UwU]

$reply
$onlyIf[$random[1;20]==5;]

$guildCooldown[10m;]
`
}]