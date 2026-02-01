module.exports = [{
name: "resetMsgs",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 65000,
code: `
$setGuildVar[msgPerMinute;0;$guildID]

`
}]