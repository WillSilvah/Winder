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
Serve para ver os membros mais ativos na temporada do servidor visto que contabiliza não só apenas mensagens como também outras interações que os membros podem ter.

- Com o passar do tempo você ganha cargos especiais.

Lista de comandos:

$addField[1;w!pda/atividade @user?;Mostra as suas estatisticas ou de outras pessoas como quantidade de mensagens e PDAs de temporadas e totais.]

$addField[1;w!rank msgs/pda total/temporada página?;Exibe os top membros de cada categoria e tipo]

]
$color[1;Orange]

$deleteCommand
$onlyIf[$authorID==494795833351602176;]
`
}]