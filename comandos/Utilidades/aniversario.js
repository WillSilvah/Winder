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
$createObject[niverObj;{"lista": ""}]
$forEachUser[1;{};returnAniversarios;listaFinal]
$sendMessage[🔍 Vasculhando registros... Aguarde.]

$onlyIf[$argsCount==0;]
$ifAwaited[$argsCount!=0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
    name: "returnAniversarios",
    type: "awaited",
    code: `
$setObjectProperty[niverObj;lista;$getObjectProperty[niverObj;lista]🎂 **$getUserVar[birthday;$authorID]** - <@$authorID>\n]
$onlyIf[$getUserVar[birthday;$authorID]!=;]
$onlyIf[$isBot[$authorID]==false;]
`
},{
    name: "listaFinal",
    type: "awaited",
    code: `
$title[🗓️ Lista de Aniversários]
$description[$if[$getObjectProperty[niverObj;lista]==;❌ Nenhum aniversário registrado.;$getObjectProperty[niverObj;lista]]]
$color[#FFC0CB]
$footer[Sistema de Aniversários do Winder]
`
}]
