module.exports = [{
    name: "aniversario",
    aliases: ["set-niver", "setniver"],
    desc: "Não deixe que seu aniversário seja esquecido!",
    category: "Interativo",
    usage: "aniversario 17/01",
    code: `
$sendMessage[<@$authorID> | Sucesso! Lembrarei o seu aniversário para o dia **$formatDate[$message[1];D/M]**.]
$clientTyping

$setUserVar[birthday;$formatDate[$message[1];D/M];$authorID;$guildID]

$onlyIf[$isNumber[$splitText[1]]$isNumber[$splitText[2]]==truetrue;<@$authorID> | Data inválida! Use apenas números no formato \`DD/MM\`.]
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
$editMessage[$get[msgId];{newEmbed:{title:🗓️ Lista de Aniversários}{description:$if[$getVar[temp_lista]==;❌ Nenhum aniversário registrado.;$getVar[temp_lista]]}{color:#FFC0CB}{footer:Sistema de Aniversários do Winder}}]
$wait[2s]
$forEachUser[1;{};returnAniversarios;]
$setVar[temp_lista;]
$let[msgId;$sendMessage[🔍 Vasculhando registros... Aguarde.;true]]

$onlyIf[$argsCount==0;]
$ifAwaited[$argsCount!=0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
    name: "returnAniversarios",
    type: "awaited",
    code: `
$setVar[temp_lista;$getVar[temp_lista]🎂 **$getUserVar[birthday;$authorID]** - <@$authorID>\n]
$onlyIf[$getUserVar[birthday;$authorID]!=;]
$onlyIf[$isBot[$authorID]==false;]
`
}]
