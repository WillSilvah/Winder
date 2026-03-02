module.exports = {
    type: "PlayerStart",
    code: `
$channelID[$getGlobalVar[consoleChat];
$env[queue]
]

`
}