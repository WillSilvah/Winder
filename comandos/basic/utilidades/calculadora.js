module.exports = {
	name: "calculadora",
    aliases: ["calc", "calcular"],
    desc: "Use a calculadora.",
    category: "Utilidades",
    usage: "calculadora 2+2",
    slash: "calc",
    type: "messageCreate",
    code: `
$onlyIf[$argsCount>0;$cmdinfo[$commandName]]

$onlyIf[$math[$message]!=;Eu juro para você que a expressão $inlineCode[$option[calcular]] não existe, eu estudei anos sobre matemática para isso.]
  
O resultado é: **$math[$message]**.
 
`,
nonprefixed: false
}