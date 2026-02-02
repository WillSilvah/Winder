module.exports = {
name: "letra",
aliases: ['letras', 'lyrics'],
desc: "Esqueceu a letra da sua música favorita?",
category: "Música",
usage: "letra <nome da música>",
code: `
$author[1;$username[$clientID] Music - Letras;$readFile[Recursos/musiclogo.txt]]
$description[1;
## $toUpperCase[$getObjectProperty[letra;title]]
**$getObjectProperty[letra;artist]**

$cropText[$getObjectProperty[letra;lyrics];3750]
]
$footer[1;A letra tem: $charCount[$getObjectProperty[letra;lyrics]] caracteres]
$color[1;Blue]

$guildCooldown[30s;<@$authorID> | Para evitar flood/spam, Espere **%time%** para executar este comando novamente!]

$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getGuildVar[prefixo]letra} {title:$getGuildVar[prefixo]letra <nome da música>} {description:Digita o nome da música, o $username[$clientID] vai enviar uma embed com a letra da música.}}]
$onlyIf[$getObjectProperty[letra;error]!=Song not found!;<@$authorID> | Não consegui encontrar a letra de \`\`$message\`\`, você digitou corretamente?]
$createObject[letra;$jsonRequest[https://api.popcat.xyz/lyrics?song=$message]]
$clientTyping
`
}
