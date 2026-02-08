module.exports = [{
name: "carro",
aliases: ["car", "carros"],
desc: "Gosta de carros? Veja uma foto aleatória!",
category: "Imagens",
usage: "carro",
code: `
<@$authorID> | $getObjectProperty[base;title]
$attachment[$getObjectProperty[base;image];winder-carro.png;URL]
 $createObject[base;$jsonRequest[https://api.popcat.xyz/car]]

$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
$clientTyping
`
}]
