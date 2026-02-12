module.exports = [{
    name: "niver-loop",
    type: "loop",
    every: "999",
    executeOnStartup: "true",
    code: `
$forEachUser[5;{};verificar_aniversariantes;]

$onlyIf[$hour:$minute:$second==07:00:00;] 
$onlyIf[$getGuildVar[birthdayChannel]!=;]
$timezone[America/Recife]
`
},{
	name: "verificar_aniversariantes",
    type: "awaited",
    code: `
$channelSendMessage[$getGuildVar[birthdayChannel];🎂 **PARABÉNS!** <@$authorID>, hoje é seu dia! Muitas felicidades! 🎉]
$onlyIf[$getUserVar[birthday;$authorID;$guildID]==$day/$month;]
$onlyIf[$isBot==false;]
$timezone[America/Recife]

$sendMessage[teste]
`
}]
