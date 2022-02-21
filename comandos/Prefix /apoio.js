module.exports = {
 name: "$alwaysExecute",
 code: `$botTyping
$reply
<@$authorID> | Atenção!
$author[1;Você ainda não escolheu um apelido!]
$description[1;Eu não te conheço e nem sequer sei como te chamar, eu te conheço por **$getUserVar[nickname]**!
Me diga como eu posso te chamar utilizando o comando **pw!nickname [APELIDO]**, eu irei alterar seu apelido e salvar ele no meu banco de dados.
$addField[1;Onde vai ser usado?;Eu irei mostrar no seu perfil, comandos que alteram seu apelido automaticamente, e muitos outros!]
$cooldown[1h;]
$onlyIf[$getUserVar[nickname]==fulano;]
  
  
`
} 
