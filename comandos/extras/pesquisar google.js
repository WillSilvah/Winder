module.exports = {
name: "pesquisar google",
code: `
<@$authorID> | Aqui está a sua pesquisa:
https://www.google.com/search?q=$replaceText[$message; ;+]
$cooldown[5s;<@$authorID> aguarde %time% para poder executar este comando novamente.]
`
}