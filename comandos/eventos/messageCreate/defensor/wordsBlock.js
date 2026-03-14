module.exports = [{
    type: "messageCreate",
    code: `
    $jsonLoad[words;$getGuildVar[badWords]]
    $arrayLoad[words;,;$jsonValues[words;words]
    $onlyIf[  
`
}]