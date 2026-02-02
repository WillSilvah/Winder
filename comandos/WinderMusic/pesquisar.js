module.exports = [{
name: "pesquisar",
aliases: ["search", "pesquisa"],
desc: "Pesquise músicas no YouTube!",
category: "Música",
usage: "pesquisar texto",
code: `
$reply
<@$authorID>
$author[1;Winder Music > Pesquisa;$readFile[Recursos/musiclogo.txt]]
$description[1;
### RESULTADOS PARA $toUpperCase[$message]
**YouTube**

$search[$message;youtube;- [{formattedDuration}] [{title} - {artist}]({url});10;
]
]
$color[1;Blue]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}] 
