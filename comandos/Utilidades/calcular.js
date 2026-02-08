module.exports = {
name: "calcular",
aliases: ['calculo', 'calculate', 'calc', 'cálculo'],
desc: "Preguiça de fazer conta simples? Permita-me fazer isso para você!",
category: "Matemática",
usage: "calc <calculo simples>",
code: `$reply
A resposta é **$math[$message[1]]**

$wait[$ifAwaited[$getGuildVar[pickStatus;861313067291115541]==true;120s;2s]]
$clientTyping
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$suppressErrors[<@$authorID> | Esse cálculo deu um erro extraordinário, ou não existe.]`}