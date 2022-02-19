module.exports = {
  name: "perfil",
  code: `
$reply
$title[1;Perfil de $username[$mentioned[1;yes]]]
$description[1;
$getUserVar[sobremim;$mentioned[1]]
$addField[1;Última mensagem enviada;**$getUserVar[mensagens1;$mentioned[1;yes]]** | Horário: $getUserVar[mensagens2;$mentioned[1;yes]] | último Canal: $getUserVar[mensagens3;$mentioned[1;yes]]]]

$addField[1;Jornada de $username[$mentioned[1;yes]] na pinwheel;**$getUserVar[mensagens;$mentioned[1;yes]]** mensagens enviadas | **$getUserVar[rep;$mentioned[1;yes]]** adoros!]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$mentioned[1]]]
`
}
