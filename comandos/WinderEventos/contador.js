module.exports = [{
name: "contador",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 600000,
code: `
$djsEval[message.guild.channels.cache.get("1463122813736063016").setName(":star: | falta $sub[$getGuildVar[membersMeta;$getVar[guildID]];$membersCount[$guildID;all;false]] peludos")]

$djsEval[message.guild.channels.cache.get("1465535257297027214").setName(":feet: | $membersCount[$guildID;all;false] peludos")]

$djsEval[message.guild.channels.cache.get("1465534760620392722").setName(":speech_balloon: | $getGuildVar[guildMonthMessages;$getVar[guildID]] mensagens")]

$cacheMembers[$getVar[guildID];false]
`
}]
// Teste