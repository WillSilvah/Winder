module.exports = [{
name: "loopStatus",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "false",
every: 15000,
code: `
$setStatus[$ram MB | $cpu% | $uptime[humanize] | $pingms | $getVersion;playing;dnd]
`
}]