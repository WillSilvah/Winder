module.exports = {
  name: "perfil",
  aliases: ['userinfo'],
  code: `
$botTyping
$reply
$title[1;Perfil de $username[$mentioned[1;yes]] ($getUserVar[nickname;$mentioned[1]])]
$description[1;
$getUserVar[sobremim;$mentioned[1]]
$addField[1;Última mensagem enviada;**$getUserVar[mensagens1;$mentioned[1;yes]]** | Horário: $getUserVar[mensagens2;$mentioned[1;yes]] | último Canal: $getUserVar[mensagens3;$mentioned[1;yes]]]

$addField[1;Jornada de $username[$mentioned[1;yes]] na pinwheel;**$getUserVar[mensagens;$mentioned[1;yes]]** mensagens enviadas | **$getUserVar[rep;$mentioned[1;yes]]** adoros! | **$getUserVar[cataventos;$mentioned[1]]** cataventos]

$addField[1;ID do usuário;$mentioned[1]]

$addField[1;Status do usuário;$activity | Plataforma: $platform[$mentioned[1]

]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$mentioned[1]]]
`
}
