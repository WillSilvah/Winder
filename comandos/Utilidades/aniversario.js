module.exports = [{
    name: "aniversario",
    aliases: ["set-niver", "setniver"],
    desc: "Não deixe que seu aniversário seja esquecido!",
	category: "Interativo",
	usage: "aniversario 17/01",
    code: `
$sendMessage[<@$authorID> | Sucesso! Lembrarei o seu aniversário para o dia **$message[1]**.]
$clientTyping

$setUserVar[birthday;$formatDate[$message[1];DD/MM;$authorID;$guildID]
$clientTyping
$onlyIf[$isNumber[$splitText[1]]|$isNumber[$splitText[2]]==true|true;<@$authorID> | Data inválida! Use apenas números no formato \`DD/MM\`.]
$onlyIf[$charCount[$message[1]]==5;<@$authorID> | Formato incorreto! Use \`DD/MM\` (Ex: 04/09).]
$textSplit[$message[1];/]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
    name: "aniversarios",
    aliases: ["proximos-niver", "niverlista"],
    code: `
$title[🗓️ Lista de Aniversários]
$description[$if[$getUserVar[temp_lista]==;❌ Nenhum aniversário registrado.;$getUserVar[temp_lista]]]
$color[#FFC0CB]
$footer[Sistema de Aniversários do Winder]

$forEachUser[1;{};returnAniversarios;limparLista]
$setUserVar[temp_lista;]
`
},{
    name: "returnAniversarios",
    type: "awaited",
    code: `
$setUserVar[temp_lista;$getUserVar[temp_lista]\n🎂 **$getUserVar[birthday;$authorID;$guildID]** - <@$authorID>]
$onlyIf[$getUserVar[birthday;$authorID;$guildID]!=;]
$onlyIf[$isBot[$authorID]==false;]
`
},{
    name: "limparLista",
    type: "awaited",
    code: `
$log[Lista de aniversários processada com sucesso.]
`
}]