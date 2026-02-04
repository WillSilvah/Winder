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

$ifAwaited[$fileExists[$dateRecursos/msgPerMinuteDays/$date/$formatDate[$dateStamp;MM]/$date.json]==true;{execute:writeFileMPM};{execute:createFileMPM}]

$timezone[America/Recife]
`
},{
	name: "createFileMPM",
	type: "awaited",
	code: `
$writeFile[$dateRecursos/msgPerMinuteDays/$formatDate[$dateStamp;MM]/$date.json;Mensagens por minuto registradas por $username[$clientID] no dia $date/$formatDate[$dateStamp;MM]/$year
;utf8]

$timezone[America/Recife]
`
},{
	name: "writeFileMPM",
	type: "awaited",
	code: `
	
	$writeFile[Recursos/msgPerMinuteDays/$date.txt;$readFile[$dateRecursos/msgPerMinuteDays/$formatDate[$dateStamp;MM]/$date.json]
$hour:$minute: $getGuildVar[msgPerMinute]
]

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
