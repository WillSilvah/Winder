module.exports = {
name: "pesquisar duckduckgo",
code: `
<@$authorID> | Aqui está a sua pesquisa:
https://www.duckduckgo.com/?q=$replaceText[$message; ;+]
$cooldown[5s;<@$authorID> aguarde %time% para poder executar este comando novamente.]
`
}