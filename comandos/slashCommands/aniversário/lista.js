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
$addTextDisplay[## ANIVERSÁRIANTES DE $get[monthName]!]
$arrayForEach[birthdayDB;data;
$arrayLoad[birthdayInfo;/;$env[data;value]]
$if[$get[month]==$arrayAt[birthdayInfo;1];
$addTextDisplay[<@$env[data;id]> - 🗓 $env[data;value] ($math[$year-$getMemberVar[birthdayYear;$env[data;id]]] anos)]
]
]
$addTextDisplay[-# Utilize o comando /aniversário adicionar para registrar o seu aniversário!]
;Green]
  `,
data: {
  "name": "lista",
  "description": "Lista de aniversariantes do mês!",
  "options": [
    {
      "type": 3,
      "description": "Mês",
      "name": "mes",
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
    }
  ]
},
}
