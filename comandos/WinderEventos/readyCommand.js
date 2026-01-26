module.exports = [{
name: "readyEvent",
type: "clientReady",
channel: "1462224055884189781",
code: `
$deleteIn[1m]
$author[1;$username[$clientID] está pronto!;$userAvatar[$clientID]]
$color[1;Random]

$log[---------------
OwO $username[$clientID] está ligado! >w<
---------------
]
$setStatus[;;online]

`
}]