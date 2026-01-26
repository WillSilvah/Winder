module.exports = [{
name: "readyEvent",
type: "clientReady",
channel: "1462224055884189781",
code: `
$deleteIn[1m]

$log[---------------
OwO $username[$clientID] está ligado! >w<
---------------
]
$setStatus[;;online]
$setUserNickname[$clientID;;]

`
}]