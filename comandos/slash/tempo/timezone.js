module.exports = {
  code: `
  $defer
  $timezone[$option[timezone]]
$description[
$addField[]Horário;$hour:minute:second]
$addField[Data;$day/$month/$year]
$footer[Faltando fuso horário? Sugira!]
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
      "name": "timezone",
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
  "name": "zona"
},
}