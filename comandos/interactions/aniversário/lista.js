module.exports = {
  code: `
$let[month;$default[$option[mes];$month[TwoDigit]]]

$let[monthName;$ifx[
$if[$get[month]==01;JANEIRO]
$elseIf[$get[month]==02;FEVEREIRO]
$elseIf[$get[month]==03;MARÇO]
$elseIf[$get[month]==04;ABRIL]
$elseIf[$get[month]==05;MAIO]
$elseIf[$get[month]==06;JUNHO]
$elseIf[$get[month]==07;JULHO]
$elseIf[$get[month]==08;AGOSTO]
$elseIf[$get[month]==09;SETEMBRO]
$elseIf[$get[month]==10;OUTUBRO]
$elseIf[$get[month]==11;NOVEMBRO]
$elseIf[$get[month]==12;DEZEMBRO]]]

$jsonLoad[birthdayDB;$searchDB[birthday;;member;;$guildID]]
$disableAllMentions
$addContainer[
$addSection[
$addTextDisplay[## ANIVERSÁRIANTES DE $get[monthName]!]
$addThumbnail[$guildIcon]
]
$addSeparator[Large]
$arrayForEach[birthdayDB;data;
$arrayLoad[birthdayInfo;/;$env[data;value]]
$if[$get[month]==$arrayAt[birthdayInfo;1];
$addTextDisplay[<@$env[data;id]> - 🗓 $env[data;value] ($math[$year-$getMemberVar[birthdayYear;$env[data;id]]] anos)]
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
