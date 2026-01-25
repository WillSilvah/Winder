module.exports = [{
name: 'manual',
aliases: ["help", "ajuda"],
desc: "Manual de todos os comandos disponíveis",
category: "Ajuda",
usage: "ajuda",
code: `$reply
<@$authorID>
$author[1;Manual de instruções do $username[$clientID];https://cdn.discordapp.com/emojis/945621147733590046.png?size=2048]
$description[1;
Todos os comandos do $username[$clientID] disponíveis para uso!

$addField[1;⚒️ Utilidades;**|** $replaceText[$replaceText[$exec[cd comandos/Utilidades && ls];
; **|** ];.js;]]

$addField[1;✌️ Moderação;**|** $replaceText[$replaceText[$exec[cd comandos/Moderacao && ls];
; **|** ];.js;]]

$addField[1;$randomText[🐱;🐶;🐺;🐻;🐨;🐼;🐹;🐭;🐰;🦊;🐮;🐷;🦁;🐵;🐯] Animal;**|** $replaceText[$replaceText[$exec[cd comandos/Animais && ls];
; **|** ];.js;]]

$addField[1;🎵 Winder Music;**|** $replaceText[$replaceText[$exec[cd comandos/WinderMusic && ls];
; **|** ];.js;]]

$addField[1;😃 Diversão;**|** $replaceText[$replaceText[$exec[cd comandos/Diversao && ls];
; **|** ];.js;]]

]
$footer[1;Use $getGuildVar[prefixo]cmdinfo <NomeDoComando> para ver mais sobre o comando!]
$color[1;#00ff2a]
`
}]
