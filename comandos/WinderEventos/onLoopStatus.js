module.exports = [{
name: "loopCommand",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "false",
every: 15000,
code: `
$setStatus[$LinuxRam MB | $cpu% | $uptime[humanize] | $pingms;custom;idle]
`
}]