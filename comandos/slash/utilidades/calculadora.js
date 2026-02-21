module.exports = {
  code: `
  $onlyIf[$math[$option[calc]]!=;Eu juro para você que a expressão $inlineCode[$option[calc]] não existe, eu estudei anos sobre matemática para isso.]
O resultado é: **$math[$option[calc]]**.

  `,
data: {
  "type": 1,
  "name": "calculadora",
  "description": "Calcule uma operação simples",
  "description_localizations": {
    "en-GB": "Calculate a simple operation",
    "en-US": "Calculate a simple operation",
    "pt-BR": "Calcule uma operação simples"
  },
  "name_localizations": {
    "en-GB": "calc",
    "en-US": "calc"
  },
  "options": [
    {
      "type": 3,
      "description": "Insira uma expressão matemática",
      "name_localizations": {
        "en-GB": "calculate",
        "en-US": "calculate",
        "pt-BR": "calcular"
      },
      "name": "calcular",
      "description_localizations": {
        "en-GB": "Enter a mathematical expression",
        "en-US": "Enter a mathematical expression",
        "pt-BR": "Insira uma expressão matemática"
      },
      "required": true
    }
  ]
},
};
