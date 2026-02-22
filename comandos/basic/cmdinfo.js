module.exports = {
    type: "messageCreate",
    code: `
    $onlyIf[$startsWith[$message;$getGuildVar[prefixo]]==true;]
 $onlyIf[$argsCount>0;$cmdinfo[$commandName]] 
`
}