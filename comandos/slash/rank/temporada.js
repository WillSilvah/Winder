module.exports = {
  code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$ifx[
$if[$option[tipo]==temporada;
$author[$env[session;name] | $if[$option[pagina]!=;$option[pagina];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[Top fofoqueiros ativos | Temporada]
$description[

]
$footer[footer]
$color[Blue]
]
$elseIf[$option[tipo]==histórico;
$author[$env[session;name] | $if[$option[pagina]!=;$option[pagina];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[Top fofoqueiros ativos | Histórico]
$description[

]
$footer[footer]
$color[Blue]

]
]
  `,
data: {
  "type": 1,
  "description": "Veja o ranking de membros em uma categoria",
  "options": [
    {
      "type": 3,
      "description": "Qual tipo de rank?",
      "name": "tipo",
      "required": true,
      "choices": [
        {
          "value": "temporada",
          "name": "temporada"
        },
        {
          "value": "histórico",
          "name": "histórico"
        }
      ],
      "name_localizations": {
        "en-GB": "type",
        "en-US": "type",
        "pt-BR": "tipo"
      },
      "description_localizations": {
        "en-GB": "What type of rank?",
        "en-US": "What type of rank?",
        "pt-BR": "Qual tipo de rank?"
      }
    },
    {
      "type": 4,
      "name": "pagina",
      "description": "Insira um número",
      "min_value": 1,
      "description_localizations": {
        "en-GB": "Enter a number",
        "en-US": "Enter a number",
        "pt-BR": "Insira um número"
      },
      "name_localizations": {
        "en-GB": "page",
        "en-US": "page",
        "pt-BR": "pagina"
      }
    }
  ],
  "name": "temporada",
  "name_localizations": {
    "en-GB": "season",
    "en-US": "season",
    "pt-BR": "temporada"
  },
  "description_localizations": {
    "en-GB": "See the ranking of members in a category",
    "en-US": "See the ranking of members in a category",
    "pt-BR": "Veja o ranking de membros em uma categoria"
  }
},
};
