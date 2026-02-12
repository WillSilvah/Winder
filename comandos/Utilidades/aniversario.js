module.exports = ({
    name: "aniversario",
    aliases: ["set-niver", "setniver"],
    desc: "Não deixe que seu aniversário seja esquecido!",
	category: "Interativo",
	usage: "aniversario 17/01",
    code: `
<@$authorID> | Sucesso! Lembrarei o seu aniversário para o dia **$message[1]**.
$setUserVar[birthday;$message[1];$authorID;$guildID]

$onlyIf[$isNumber[$splitText[1]]|$isNumber[$splitText[2]]==true|true;<@$authorID> | Data inválida! Use apenas números no formato \`DD/MM\`.]
$onlyIf[$charCount[$message[1]]==5;<@$authorID> | Formato incorreto! Use \`DD/MM\` (Ex: 04/09).]
$textSplit[$message[1];/]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
})
