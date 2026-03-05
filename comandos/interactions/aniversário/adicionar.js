module.exports = {
  code: `
  $let[dia;$if[$charCount[$option[dia]]==1;0$option[dia];$option[dia]]]
  $let[mes;$option[mes]]
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
      "type": 4,
      "description": "Mês do seu aniversário",
      "name": "mes",
      "required": true,
      "choices": [
        {
          "name": "1️⃣ Janeiro",
          "value": "01"
        },
        {
          "name": "2️⃣ Fevereiro",
          "value": "02"
        },
        {
          "name": "3️⃣ Março",
          "value": "03"
        },
        {
          "name": "4️⃣ Abril",
          "value": "04"
        },
        {
          "name": "5️⃣ Maio",
          "value": "05"
        },
        {
          "name": "6️⃣ Junho",
          "value": "06"
        },
        {
          "name": "7️⃣ Julho",
          "value": "07"
        },
        {
          "name": "8️⃣ Agosto",
          "value": "08"
        },
        {
          "name": "9️⃣ Setembro",
          "value": "09"
        },
        {
          "name": "🔟 Outubro",
          "value": "10"
        },
        {
          "name": "1️⃣1️⃣ Novembro",
          "value": "11"
        },
        {
          "name": "1️⃣2️⃣ Dezembro",
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
},
}
