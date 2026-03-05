module.exports = {
  code: `
$let[month;$default[$option[mes];$month[TwoDigit]]]
$jsonLoad[birthdayDB;$searchDB[birthday;;member;;$guildID]]
$disableAllMentions
$addContainer[
$addSection[
$addTextDisplay[## ANIVERSÁRIANTES DO MÊS!]
$addThumbnail[$guildIcon]
]
$addSeparator[Large]
$arrayForEach[birthdayDB;data;
$arrayLoad[birthdayInfo;/;$env[data;value]]
$if[$get[month]==$arrayAt[birthdayInfo;1];
$addTextDisplay[<@$env[data;id]> - $env[data;value]]
]
]
;Green]
  `,
data: {
  "name": "lista",
  "description": "Lista de aniversariantes do mês!",
  "options": [
    {
      "type": 4,
      "description": "Mês",
      "name": "mes",
      "min_value": 1,
      "max_value": 12,
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
    }
  ]
},
}
