module.exports = {
    type: "playerStart",
    code: `
$channelID[$getGlobalVar[consoleChat];
$env[queue]
]

`
}