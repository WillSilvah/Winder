module.exports = [{
name: "hora",
aliases: ["relógio", "clock", "horas", "ampulheta"],
desc: "Veja a hora de qualquer lugar pelo Winder!",
category: "Utilidades",
usage: "hora",
code: `

$ifAwaited[$argsCount==0;{execute:hora-homepage};{execute:hora-dita}]

`
},{
name: "hora-homepage",
type: "awaited",
code: `

$title[1;⌚Que hora é?]
$description[1;

$addField[1;🇵🇹 PORTUGAL: $hour:$minute:$second $date/$formatDate[$dateStamp;MM]/$year;**Horário de Lisboa**]
$timezone[Europe/Lisbon]


$addField[1;🇧🇷 BRASIL: $hour:$minute:$second $date/$formatDate[$dateStamp;MM]/$year;**Horário de Brasília**]
$timezone[America/Recife]

]
$color[1;Blue]

$reply

`
},{
name: "home-dita",
type: "awaited",
code: `
A hora em **$message[1]** é **$hour:$minute:$second**
$timezone[$message[1]]

$reply
$clientTyping

$suppressErrors[<@$authorID> Algo deu errado.]
$onlyIf[1==2;]
`
}]