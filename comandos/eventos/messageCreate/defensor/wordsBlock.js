module.exports = [{
    type: "messageCreate",
    code: `$stop
    $jsonLoad[words;$getGuildVar[badWords]]
    $arrayLoad[words;,;$jsonValues[words;words]
`
}]