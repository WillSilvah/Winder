module.exports = {
    type: "clientReady",
    code: `
$setGlobalVar[version;$username[$clientID] $day.$month]
$sendMessage[$getGlobalVar[consoleChat];
$author[$username[$clientID] está ligado!]
$description[
$addField[Versão do ForgeScript;$version;true]
$addField[Versão do NodeJS;$nodeVersion;true]
$addField[Versão do $username[$clientID];$getGlobalVar[version]]
]
$thumbnail[$userAvatar[$clientID]]
$color[Blue]
]
$log[---------------
$username[$clientID] está ligado! >w<
---------------
]

$setStatus[Online;Playing;$username[$clientID] está ligado! >w<]

$setInterval[
$setStatus[Online;Playing;$parseInt[$ram] MB | $parseInt[$cpu]% | $parseDigital[$uptime] | $pingms | $getGlobalVar[version]]

;15s;ClientStatus]
`,
}
