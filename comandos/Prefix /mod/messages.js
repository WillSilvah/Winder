module.exports = {
  name: "mensagens",
  code: `
$reply 
<@$authorID> | O **$username[$mentioned[1;yes]]** enviou $getUserVar[mensagens;$mentioned[1;yes]] mensagens!
`
}