module.exports = [{
name: "readyEvent",
type: "clientReady",
channel: "1465218335389257802",
code: `
$channelSendMessage[1465218335389257802;{newEmbed:
{author:$username[$clientID] está ligado!]}
{description:
{field:AOi.JS:$packageVersion:true}
{field:Node.JS:$nodeVersion:true}
{field:Versão do $username[$clientID]:$getVar[versão]:true}
{color:Blue}
}
}
]

$log[---------------
$username[$clientID] está ligado! >w<
---------------
]
$setStatus[;;online]

`
}]