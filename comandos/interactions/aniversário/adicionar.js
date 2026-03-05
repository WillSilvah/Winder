module.exports = {
  code: `

  `,
data: {
  "type": 1,
  "name": "adicionar",
  "description": "Adicione o seu aniversário para ser comemorado no seu dia!",
  "options": [
    {
      "type": 4,
      "description": "Dia do mês do seu aniversário",
      "name": "dia",
      "min_value": 1,
      "max_value": 31,
      "required": true
    },
    {
      "type": 4,
      "description": "Mês do seu aniversário",
      "name": "mes",
      "min_value": 1,
      "max_value": 12,
      "required": true,
      "choices": [
        {
          "name": "Janeiro",
          "value": "01"
        },
        {
          "name": "Fevereiro",
          "value": "02"
        },
        {
          "name": "Março",
          "value": "03"
        },
        {
          "name": "Abril",
          "value": "04"
        },
        {
          "value": "05",
          "name": "Maio"
        },
        {
          "name": "Junho",
          "value": "06"
        },
        {
          "value": "07",
          "name": "Julho"
        },
        {
          "name": "Agosto",
          "value": "08"
        },
        {
          "name": "Setembro",
          "value": "09"
        },
        {
          "name": "Outubro",
          "value": "10"
        },
        {
          "value": "11",
          "name": "Novembro"
        },
        {
          "name": "Dezembro",
          "value": "12"
        }
      ]
    }
  ]
},
}
