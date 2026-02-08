module.exports = [{
name: "parardelembrar",
aliases: ["stopremind", "stopreminder", "nãolembrar"],
desc: "Não quer mais que o Winder lembre você de alguma coisa?",
category: "Utilidades",
usage: "parardelembrar ID",
code: `
Pronto! lembrete \`\`$message[1]\`\` foi desativado!

$reply

$stopTimeout[$message[1]]
$onlyIf[$isNumber[$message[1]]==true;<@$authorID> Isso não é um número, por favor, tente novamente.]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

$suppressErrors[<@$authorID> Algo deu errado!
\`\`\`
{error}
\`\`\`
]
`
}]