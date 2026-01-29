module.exports = [{
name: "update-sumario",
code: `
$title[1;$customEmoji[pats_vicksyWave] Patinhas: Nossa toca, sua casa;https://discord.me/patinhas]
$description[1;
Seja muito bem vindo a nossa bela comunidade caro peludo!
A Patinhas foi criada no intuito de ser um lugar para os furries (e não furries) se divertirem, interagirem entre si e compartilhar coisas incríveis do dia-a-dia e claro, tendo segurança e organização.

Esperamos que você goste da Patinhas e que sinta-se confortável com a gente!

$addField[1;☑️ Vote na Patinhas;[Discords.com](https://discords.com/servers/$guildID/upvote)]
$addField[1;⭐ Avalie a Patinhas;[Pinwheel no Disboard](https://disboard.org/pt-pt/server/$guildID)]
$addField[1;🐦 Nosso twitter;[@winder_pwhl](https://twitter.com/winder_pwhl)]

]
$color[1;Red]

$title[2;]

$title[3;$customEmoji[pats_lobo_alegre] Explicando canais]
$description[3;
Os canais da comunidade tem sua utilidade, vamos aprender para quê cada um serve?

$addField[3;<#1463315740403830936>;Os aniversário dos membros são anunciados aqui pelo <@656621136808902656>;false]

$addField[3;<#1462224055884189782>;Canal para os artistas postarem suas artes!;false]

$addField[3;<#1464643551810818052>;Use comandos de economia do Unbelievaboat aqui!;false]
]
$color[3;Blue]

$deleteCommand
$onlyIf[$authorID==494795833351602176;]
`
}]