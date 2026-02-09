module.exports = [{
name: "awaitMemberUpdate",
type: "presenceUpdate",
channel: "$getVar[consoleChat]",
code: `
$getGlobalUserVar[lastMemberUpdateTime]
$getGlobalUserVar[lastMemberUpdateStatus]

$setGlobalUserVar[lastMemberUpdateStatus;$userStatus;$authorID]
$setGlobalUserVar[lastMemberUpdateTime;$hour:$minute:$second - $formatDate[$dateStamp;DD/MM/YYYY];$authorID]
`
}]