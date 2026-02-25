module.exports = [{
    name: "minigame",
    params: [
    {
      name: 'tipo',
      description: "Tipo do minigame a ser executado",
      required: true
    }
    ],
    code: `

$setGuildVar[minigameXPmin;5;$guildID]
$setGuildVar[minigameXPmax;15;$guildID]
$if[$env[tipo]==fraseRepeat;
$let[frase_id;$randomNumber[1;$exec[ls -1 Recursos/WinderMinigames/FraseRepeat/Frases/ | wc -l]]]

$jsonLoad[frase;$readFile[Recursos/WinderMinigames/FraseRepeat/Frases/$get[frase_id].txt]]

$setGuildVar[minigameWord;$env[frase;texto];$guildID]

$author[QUEM ESCREVER PRIMEIRO GANHA!;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[
### $replaceText[$env[frase;texto]; ; ]
‌
]
$footer[$env[frase;autor]]
$color[Green]

$setGuildVar[minigameType;$env[tipo];$guildID]
$setGuildVar[minigameStatus;true;$guildID]

]

$if[$env[tipo]==questions;

$let[id;$randomNumber[1;$exec[ls -1 Recursos/WinderMinigames/Questions/asks/ | wc -l]]]


$jsonLoad[ask;$readFile[Recursos/WinderMinigames/Questions/asks/$get[id].txt]]
$jsonLoad[alt;$env[ask;alts]]


$author[Evento de chat: Perguntas;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[
### $toUpperCase[$env[ask;pergunta] ($env[ask;difficulty])]
$if[$env[alt;a]!=undefined;A: $env[alt;a]]
$if[$env[alt;b]!=undefined;B: $env[alt;b]]
$if[$env[alt;c]!=undefined;C: $env[alt;c]]
$if[$env[alt;d]!=undefined;D: $env[alt;d]]
$if[$env[alt;e]!=undefined;E: $env[alt;e]]
]
$footer[Responda apenas com a letra da resposta! | ID: $get[id]]
$image[$if[$env[ask;image]==;https://cdn.discordapp.com/attachments/785632865709981756/1465469785813942272/IMG_20260126_191316.png?ex=69793898&is=6977e718&hm=559e450ba67a6a132a64f475bb1781cce2aa4ebe4f046a39c5fc3dd303382591&;$env[ask;image]]]
$color[Green]

$setGuildVar[minigameWord;$env[ask;correct];$guildID]

$setGuildVar[minigameType;$env[tipo];$guildID]
$setGuildVar[minigameStatus;true;$guildID]
]

`}]