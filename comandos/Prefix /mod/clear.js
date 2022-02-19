module.exports = {
name: "clear",
aliases: ['limpar'],
code: `
  $reply
$clear[$message[1]]
<@$authorID> | Chat limpo com sucesso!
$onlyPerms[managemessages;<@$authorID> | Você precisa ter a permissão de gerenciar mensagens para executar este comando.]
$argsCheck[1;<@$authorID> | Se eu fosse adivinha eu estaria rico! Quantas mensagens eu devo deletar?]
$if[$message[1]>1000;<@authorID> | Eu só posso deletar abaixo de 1000 mensagens.]


`
}
