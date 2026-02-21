module.exports = {
  code: `
  $defer
$jsonLoad[local;{
  "America/Recife": "🟦Pernambuco: Recife",
  "America/Sao_Paulo": "🇧🇷Brasil: Sul/Sudeste/Nordeste",
  "America/Manaus": "🇧🇷Brasil: Norte",
  "America/Cuiaba": "🇧🇷Brasil: Mato Grosso",
  "America/Rio_Branco": "🇧🇷Brasil: Acre",
  "Europe/Lisbon": "🇵🇹Portugal: Lisboa",
  "America/New_York": "🇺🇸Estados Unidos: Novo Iorque",
  "Asia/Shanghai": "🇨🇳 China: Xangai",
  "America/Argentina/Buenos_Aires": "🇦🇷Argentina: Bueno Aires"
}]

$timezone[$option[zone]]
$title[🕑 Rélogio: $env[local;$option[zone]]]
$description[
## $hour:$minute:$second
**$day/$month/$year**
]
$footer[Faltando fuso horário? Sugira!]
$thumbnail[https://abs.twimg.com/emoji/v2/72x72/1f559.png]
$color[Random]
  `,
data: {
  "type": 1,
  "description": "Veja a hora de algum fuso horário",
  "name_localizations": {
    "en-GB": "clock",
    "en-US": "clock"
  },
  "description_localizations": {
    "en-GB": "See the time in any time zone",
    "en-US": "See the time in any time zone",
    "pt-BR": "Veja a hora de algum fuso horário"
  },
  "options": [
    {
      "type": 3,
      "autocomplete": false,
      "description_localizations": {
        "en-GB": "Example: Recife",
        "en-US": "Example: Recife",
        "pt-BR": "Exemplo: Recife"
      },
      "name_localizations": {
        "en-GB": "timezone",
        "en-US": "timezone",
        "pt-BR": "timezone"
      },
      "name": "zone",
      "choices": [
        {
          "value": "America/Recife",
          "name": "🟦Pernambuco: Recife"
        },
        {
          "name": "🇧🇷Brasil: Sul/Sudeste/Nordeste",
          "value": "America/Sao_Paulo"
        },
        {
          "name": "🇧🇷Brasil: Norte",
          "value": "America/Manaus"
        },
        {
          "name": "🇧🇷Brasil: Mato Grosso",
          "value": "America/Cuiaba"
        },
        {
          "name": "🇧🇷Brasil: Acre",
          "value": "America/Rio_Branco"
        },
        {
          "name": "🇵🇹Portugal: Lisboa",
          "value": "Europe/Lisbon"
        },
        {
          "name": "🇺🇸Estados Unidos: Novo Iorque",
          "value": "America/New_York"
        },
        {
          "name": "🇨🇳 China: Xangai",
          "value": "Asia/Shanghai"
        },
        {
          "value": "America/Argentina/Buenos_Aires",
          "name": "🇦🇷Argentina: Bueno Aires"
        }
      ],
      "required": true,
      "description": "Veja o horário e data de um lugar pré estabelecido."
    }
  ],
  "name": "timezone"
},
};