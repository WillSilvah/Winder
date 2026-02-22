module.exports = {
    type: "messageCreate",
    code: `
    $onlyIf[$startsWith[$message;$getGuildVar[prefixo]]==true;]
 $onlyIf[$argsCount>1;$cmdinfo[$commandName]] 
`
}