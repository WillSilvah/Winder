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

$title[2;$customEmoji[pats_logo] Explicando os cargos]
$description[2;
Os cargos podem tanto ser decorativos, beneficiários ou de gerência, saiba o que é cada um.

> $<@&1462546916821696612>
Um grupo de furros que observam, recepcionam e administram a comunidade para melhor organização e segurança, eles são legais :3

> <@&1462797987041513574>
Membros que enviaram mensagens suficientes para serem verificados automaticamente pelo Winder.

> <@&1462544909390319960>
O cargo de todos os membros

> <@&1462545172159270963>
Membros que entraram na comunidade antes dos 100 membros e durante a construção da comunidade, vinheram desde quando tudo era mato.
]
$color[2;Orange]

$title[3;$customEmoji[pats_lobo_alegre] Explicando canais]
$description[3;
Os canais da comunidade tem sua utilidade, vamos aprender para quê cada um serve?

$addField[3;<#1463315740403830936>;Os aniversário dos membros são anunciados aqui pelo <@656621136808902656>;false]

$addField[3;<#1462224055884189782>;Canal para os artistas postarem suas artes!;false]

$addField[3;<#1464643551810818052>;Use comandos de economia do Unbelievaboat aqui!;false]

$addField[3;<#1463277652562411787>;Precisa de ajuda? Não hesite em chamar o suporte!;false]
]
$color[3;Blue]

$deleteCommand
$onlyIf[$authorID==494795833351602176;]
`
}]