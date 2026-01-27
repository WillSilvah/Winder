module.exports = [{
name: "contador",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 600000,
code: `
$djsEval[message.guild.channels.cache.get("1463122813736063016").setName(" | falta $sub[$membersCount[$guildID;all;no];$getGuildVar[membersMeta;$getVar[guildID]]] peludos")]

$djsEval[message.guild.channels.cache.get("1465535257297027214").setName(" | $membersCount[$guildID;all;no] peludos")]

$djsEval[message.guild.channels.cache.get("1465534760620392722").setName(" | $getGuildVar[guildMonthMessages;$getVar[guildID]] mensagens")]

$cacheMembers[$getVar[guildID];no]
`
}]