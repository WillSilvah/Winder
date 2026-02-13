module.exports = [{
    name: "aniversario",
    aliases: ["set-niver", "setniver", "aniversário"],
    desc: "Não deixe que seu aniversário seja esquecido!",
    category: "Interativo",
    usage: "aniversario 17/01",
    code: `
$sendMessage[<@$authorID> | Sucesso! Lembrarei o seu aniversário para o dia **$splitText[1]/$splitText[2]**.]
$clientTyping

$setUserVar[birthday;$splitText[1]/$splitText[2];$authorID;$guildID]

$onlyIf[$isNumber[$splitText[1]]$isNumber[$splitText[2]]==truetrue;<@$authorID> | Data inválida! Use apenas números no formato \`DD/MM\`.]
$onlyIf[$charCount[$message[1]]==5;<@$authorID> | Formato incorreto! Use \`DD/MM\` (Ex: 17/01).]
$textSplit[$message[1];/]


$timezone[America/Recife]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
    name: "aniversários",
    aliases: ["proximos-niver", "niverlista", "aniversarios"],
    desc: "Veja a lista de todos os aniversários registrados!",
    category: "Interativo",
    usage: "aniversarios",
    code: `
$editMessage[$get[msgId];<@$authorID> {newEmbed:
{title:🗓️ Lista de Aniversários}
{description:$if[$getVar[temp_lista]==;❌ Nenhum aniversário registrado.;$getVar[temp_lista]]}
{color:Red}
{footer:Utilize $getGuildVar[prefixo]aniversário DD/MM para adicionar o seu aniversário!}}]
$wait[2s]
$forEachUser[1;{};returnAniversarios;]
$setVar[temp_lista;]
$let[msgId;$sendMessage[<@$authorID> 🔍 Procurando aniversários... Aguarde.;true]]

$clientTyping

$onlyIf[$argsCount==0;]
$ifAwaited[$argsCount!=0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
    name: "returnAniversarios",
    type: "awaited",
    code: `
$setVar[temp_lista;$getVar[temp_lista]🎂 **$getUserVar[birthday;$authorID]** - <@$authorID>\n]
$onlyIf[$splitText[2]==$formatDate[$dateStamp;M];]
$textSplit[$getUserVar[birthday;$authorID];/]
$onlyIf[$getUserVar[birthday;$authorID]!=;]
$onlyIf[$isBot[$authorID]==false;]
`
}]
