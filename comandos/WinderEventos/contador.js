module.exports = [{
name: "contador",
type: "loop",
channel: "$getVar[consoleChat",
executeOnStartup: "true",
every: 600000,
code: `
$editChannel[1463122813736063016; | falta $sub[$membersCount[$guildID;all;no];$getGuildVar[membersMeta;$getVar[guildID]]] peludos]

$editChannel[1465535257297027214; | $membersCount[$guildID;all;no] peludos]

$editChannel[1465534760620392722; | $getGuildVar[guildMonthMessages;$getVar[guildID]] mensagens]

$cacheMembers[$getVar[guildID];no]
`
}]