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
    desc: "Veja a lista de todos os aniversários registrados!",
    category: "Interativo",
    usage: "aniversarios",
    code: `
$footer[🔍 Vasculhando registros... Aguarde.]
$forEachUser[1;{"niver": ""};returnAniversarios;listaFinal]

`
},{
    name: "returnAniversarios",
    type: "awaited",
    code: `
$setObjectProperty[lista;niver;$getObjectProperty[lista;niver]\n🎂 **$getUserVar[birthday;$authorID]** - <@$authorID>]
$onlyIf[$getUserVar[birthday;$authorID]!=;]
$onlyIf[$isBot[$authorID]==false;]
$createObject[lista;{"niver": ""}]
`
},{
    name: "listaFinal",
    type: "awaited",
    code: `
$title[🗓️ Lista de Aniversários]
$description[$checkCondition[$getObjectProperty[lista;niver]==;❌ Nenhum aniversário registrado.;$getObjectProperty[lista;niver]]]
$color[#FFC0CB]
$footer[Sistema de Aniversários do Winder]
`
}]
