module.exports = ({
    name: "aniversario",
    aliases: ["set-niver", "setniver"],
    desc: "Não deixe que seu aniversário seja esquecido!",
	category: "Interativo",
	usage: "aniversario 17/01",
    code: `
<@$authorID> | Sucesso! Lembrarei o seu aniversário para o dia **$message[1]**.
$setUserVar[birthday;$message[1];$authorID;$guildID]
$onlyIf[$isValidDate[$splitText[2]/$splitText[1]/2026]==true;<@$authorID> | Data inválida! Use o formato \`DD/MM\` (Ex: 21/03).]
$textSplit[$message[1];/]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
})
