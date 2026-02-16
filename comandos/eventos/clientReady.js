module.exports = {
    type: "clientReady",
    code: `
$setGlobalVar[version;$username[$clientID] $day/$month]
$sendMessage[$getGlobalVar[consoleChat];
$author[1;$username[$clientID] está ligado!]
$description[
$addField[1;Versão do ForgeScript;$version;true]
$addField[1;Versão do NodeJS;$nodeVersion;true]
$addField[Versão do $username[$clientID];$getGlobalVar[version]
]
$thumbnail[$userAvatar[$clientID]]
$color[Blue]


]
$log[---------------
$username[$clientID] está ligado! >w<
---------------

]
`,
}