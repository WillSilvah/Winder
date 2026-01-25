module.exports = [{
name: "readyEvent",
type: "ready",
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