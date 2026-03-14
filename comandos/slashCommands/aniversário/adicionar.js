module.exports = {
  code: `
  $let[dia;$if[$charCount[$option[dia]]==1;0$option[dia];$option[dia]]]
  $let[mes;$if[$charCount[$option[mes]]==1;0$option[mes];$option[mes]]]
  $let[ano;$option[ano]]
$setMemberVar[birthday;$get[dia]/$get[mes]]
$setMemberVar[birthdayYear;$get[ano]]

$interactionReply[<@$authorID> Pronto! Lembrarei o seu aniversário para todos no dia **$get[dia]/$get[mes]**! 🎂]
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
      "type": 3,
      "description": "Mês do seu aniversário",
      "name": "mes",
      "required": true,
      "choices": [
        {
          "name": "01: Janeiro",
          "value": "01"
        },
        {
          "name": "02: Fevereiro",
          "value": "02"
        },
        {
          "name": "03: Março",
          "value": "03"
        },
        {
          "name": "04: Abril",
          "value": "04"
        },
        {
          "name": "05: Maio",
          "value": "05"
        },
        {
          "name": "06: Junho",
          "value": "06"
        },
        {
          "name": "07: Julho",
          "value": "07"
        },
        {
          "name": "08: Agosto",
          "value": "08"
        },
        {
          "name": "09: Setembro",
          "value": "09"
        },
        {
          "name": "10: Outubro",
          "value": "10"
        },
        {
          "name": "11: Novembro",
          "value": "11"
        },
        {
          "name": "12: Dezembro",
          "value": "12"
        }
      ]
    },
    {
      "type": 4,
      "description": "Ano em que você nasceu",
      "name": "ano",
      "min_value": 1817,
      "max_value": 2050,
      "required": true
    }
  ]
}
,
}
