module.exports = {
    code: `
    $timezone[America/Recife] $timezone[America/Recife] $c[Fuso horário de Pernambuco, padrão em todo o sistema]
    $onlyIf[$getMemberVar[dailyLast;$authorID;$guildID;00/00]!=$day[TwoDigit]/$month[TwoDigit];Você já pegou o prêmio diário hoje!]
    $setMemberVar[dailyLast;$day[TwoDigit]/$month[TwoDigit]]
    $let[money;$getMemberVar[money;$authorID;$guildID;0]]
    $let[daily;$randomNumber[50;100]]
    
    $letSum[money;$get[daily]]
    $setMemberVar[money;$get[money]]
    
    $interactionReply[Parabéns, você ganhou **$get[daily]** furrásticos!]
`,
  data: {
  "type": 1,
  "description": "Ganhe um bônus!",
  "name": "diario",
  "name_localizations": {
    "en-GB": "diary",
    "en-US": "diary",
    "es-ES": "diario",
    "es-419": "diario",
    "pt-BR": "diário"
  },
  "description_localizations": {
    "en-GB": "Get a bonus!",
    "en-US": "Get a bonus!",
    "es-419": "¡Obtén un bono!",
    "pt-BR": "Ganhe um bônus!"
  }
},
}
