module.exports = [{
name: "update-infopda",
code: `
$title[1;$customEmoji[pats_logo] O que é pontos de atividade?]
$description[1;
Os pontos de atividade (PDA) são tipos pontos de experiência mas criado de uma forma mais especial para a Patinhas. Os PDA são contabilizados na base da atividade e interação que o membro tem com o servidor.
-# Gerenciado por <@$clientID>

> **Como ganha PDA's?**
Praticamente interagindo com a comunidade, conversando em canais de texto, [Votando no Discords.com](https://discords.com/servers/1462224054676099094/upvote), sendo impulsionador e afins.

> **Para quê serve o PDA?**


]
$color[1;Orange]

$deleteCommand
$onlyIf[$authorID==494795833351602176;]
`
}]