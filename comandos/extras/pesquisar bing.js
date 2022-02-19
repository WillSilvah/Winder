module.exports = {
name: "pesquisar bing",
code: `
<@$authorID> | Aqui está a sua pesquisa:
https://www.bing.com/search?q=$replaceText[$message; ;+]
$cooldown[5s;<@$authorID> aguarde %time% para poder executar este comando novamente.]
`
}