module.exports = [{
name: "resetMsgs",
type: "loop",
channel: "1468237433337544877",
executeOnStartup: "true",
every: 65000,
code: `
$setGuildVar[msgPerMinute;0;$guildID]

$wait[1s]

$ifAwaited[$hour:$minute:$second==00:00:00;{execute:sendFileMPM}]

$ifAwaited[$fileExists[Recursos/msgPerMinuteDays/$formatDate[$dateStamp;MM]/$date.json]==true;{execute:createFileMPM};{execute:writeFileMPM}]

$timezone[America/Recife]
`
},{
	name: "writeFileMPM",
	type: "awaited",
	code: `
$exec[echo "$hour:$minute: $getGuildVar[msgPerMinute" > Recursos/msgPerMinuteDays/$formatDate[$dateStamp;MM]/$date.json;Mensagens por minuto registradas por $username[$clientID] no dia $date/$formatDate[$dateStamp;MM]/$year

$timezone[America/Recife]
`
},{
	name: "createFileMPM",
	type: "awaited",
	code: `
$awaitExecute[writeFileMPM]

$exec[echo "$hour:$minute: $getGuildVar[msgPerMinute]" > Recursos/msgPerMinuteDays/$date.txt;$readFile[$dateRecursos/msgPerMinuteDays/$formatDate[$dateStamp;MM]/$date.json]

$timezone[America/Recife]
`
},{
	name: "sendFileMPM",
	type: "awaited",
	code: `

$createFile[$readFile[Recursos/msgPerMinuteDays/$date.txt;$readFile[$dateRecursos/msgPerMinuteDays/$formatDate[$dateStamp;MM]/$date.json;$date-msgPerMinute.txt]

$timezone[America/Recife]
`
}]
