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
$if[$env[tipo]==fraseRepeat;
$let[frase_id;$randomNumber[1;$exec[ls -1 Recursos/WinderMinigames/FraseRepeat/Frases/ | wc -l]]]

$jsonLoad[frase;$readFile[Recursos/WinderMinigames/FraseRepeat/Frases/$get[frase_id].txt]]

$author[QUEM ESCREVER PRIMEIRO GANHA!;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[
### $replaceText[$env[frase;texto]; ; ]
‌
]
$footer[$env[frase;autor]]
$color[Green]

$setGuildVar[minigameWord;$env[frase;texto];$guildID]

]
`}]