module.exports = {
name: "pesquisar youtube",
code: `
<@$authorID> | Aqui está a sua pesquisa:
https://www.youtube.com/results?search_query=$replaceText[$message; ;+]
$cooldown[5s;<@$authorID> aguarde %time% para poder executar este comando novamente.]
`
}