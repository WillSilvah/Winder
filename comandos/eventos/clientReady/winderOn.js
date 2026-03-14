module.exports = {
    type: "clientReady",
    code: `
$onlyIf[$os==linux;
$log[Winder não foi feito para ser utilizado em outros sistemas operacionais que não seja baseado em Linux. Por favor, execute-o em uma distribuição linux como Debian, Ubuntu, Fedora e afins.]
$botDestroy
]
   
$update
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
$if[$getGlobalVar[sleepMode]==false;
$setStatus[Idle;Playing;$getGlobalVar[version] | $parseInt[$ram] MB | $truncate[$math[($cpu/1000)*100]]% | $pingms | $parseDigital[$uptime]];
$setStatus[Invisible;Playing;🌙 Dormindo...]
]
;12s;ClientStatus]
`
}
