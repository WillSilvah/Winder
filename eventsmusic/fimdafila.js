module.exports = [{
type: "queueEnd",
channel: "$getVar[consoleChat]",
code: `
$awaitExecute[leave-vc]

$useChannel[$getVar[consoleChat]]
$suppressErrors
`
}]