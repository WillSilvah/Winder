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
$setVar[temp_lista;]

$forEachUser[1;{"msgId": "$get[msgId]", "author": "$authorID"};returnAniversarios;endAniversarios]

$let[msgId;$sendMessage[<@$authorID> 🔍 Procurando aniversariantes do mês... Aguarde.;true]]

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
$onlyIf[$sub[$splitText[2];0]==$formatDate[$dateStamp;M];]
$textSplit[$getUserVar[birthday;$authorID];/]
$onlyIf[$getUserVar[birthday;$authorID]!=;]
$onlyIf[$isBot[$authorID]==false;]
`
},{
    name: "endAniversarios",
    type: "awaited",
    code: `
$editMessage[$awaitData[msgId];<@$awaitData[author]> {newEmbed:
{title:🗓️ Aniversariantes do Mês}
{description:$if[$getVar[temp_lista]==;❌ Nenhum aniversário registrado este mês.;$getVar[temp_lista]]}
{color:Red}
{footer:Utilize $getGuildVar[prefixo]aniversário DD/MM para participar!}}]
`
}]
