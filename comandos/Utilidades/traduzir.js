module.exports = [{
name: "traduzir",
aliases: ["translator", "tradutor"],
desc: "Traduza um texto para qualquer língua",
category: "Útil",
usage: "traduzir <língua> <texto>",
code: `
$author[1;Winder Tradutor;https://cdn.discordapp.com/emojis/1184916501396983868.png?size=2048]
$description[1;
$getObjectProperty[traduzir;translated]
]
$color[1;$dyColor[blue;light]]
$reply

$onlyIf[$stringStartsWith[$getObjectProperty[traduzir;translated];The language '$uri[$message[1]]' is not supported.]==false;<@$authorID> | A linguagem não é suportada.]
$createObject[traduzir;$jsonRequest[https://api.popcat.xyz/translate?to=$message[1]&text=$uri[$messageSlice[1]]]]

$onlyIf[$argsCount>1;]
$ifAwaited[$argsCount<1;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$suppressErrors[<@$authorID> | Tentei com todas as forças executar este comando e sabe o que aconteceu? Nada, algo deu errado.]
`
}]