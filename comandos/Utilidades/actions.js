module.exports = [{
name: "actions",
aliases: ["ações"],
desc: "Ações e atalhos que podem ser úteis para fazer uma conversa mais útil!",
category: "Utilidades",
usage: "actions",
code: `
<@$authorID> | Você pode sugerir ações novas ou opinar sobre esse recurso!
$author[1;Ações disponíveis:]
$description[1;
**Como funciona?**
Termine a sua mensagem com {action} que algo vai ser executado!

$addField[1;{delete}/{d};Use como se fosse uma mensagem temporária, sua mensagem será deletada após 15 segundos]
$color[1;$dyColor[blue;light]]

]

`
}]
