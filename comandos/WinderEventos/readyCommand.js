module.exports = [{
name: "readyEvent",
type: "clientReady",
channel: "1465218335389257802",
code: `
$channelSendMessage[1465218335389257802;{newEmbed:
{author:$username[$clientID] está ligado!}
{description:
#### AOi.JS
$packageVersion
### Node.JS
$nodeVersion
### Versão do $username[$clientID]
> $getVar[versão]
{color:Blue}
}}
]

$log[---------------
$username[$clientID] está ligado! >w<
---------------
]
$setStatus[;;online]

`
}]