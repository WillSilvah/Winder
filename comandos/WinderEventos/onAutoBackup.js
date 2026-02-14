module.exports = [{
name: "loopStatus",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "false",
every: 15000,
code: `
$log[$exec[cd && bash services/backup/backup_db.sh]]

$onlyIf[$hour:$minute:$seconds==05:00:00;]
$timezone[America/Recife]
`
}]