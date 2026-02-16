module.exports = {
  code: `
$option[tipo]
  `,
data: {
  {
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
