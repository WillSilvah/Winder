module.exports = {
    name: "teste",
    desc: "Comando de teste, geralmente utilizado pelo desenvolvedor testar eventos",
category: "Desenvolvimento",
usage: "teste argumentos",
    type: "messageCreate",
    code: `
$onlyIf[$argsCount>0;]

argumentou
`
}