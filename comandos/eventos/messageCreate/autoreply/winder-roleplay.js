module.exports = {
    type: "messageCreate",
    code: `$if[$getGlobalVar[sleepMode]==true;$stop]
$cooldown[$guildID;10m]
$onlyIf[$randomNumber[1;15]==5;]
$reply
$randomText[$randomText[Miau;Meow;Meooww;Miaauu]! :3;*lambe você* >w<;*abraça você* >w<;*sniff sniff* 👃 $randomText[Vai tomar banho!!; Está de banho tomado, parabéns!;Que cheiro é esse?];*se esfregando em suas pernas e ronrona* UwU;*boop! OwO*;*morde você* >:3;*pat pat* OwO;*cafuné* OwO;*morde você* UwU;*boop* $emoji[$emojiID[pats_foxShy]]]


`
}