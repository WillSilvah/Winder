module.exports = [{
name: "contador",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 600000,
code: `
$djsEval[message.guild.channels.cache.get("1463122813736063016").setName("⭐️ | falta $sub[$getGuildVar[membersMeta;$guildID];$membersCount[$guildID;all;false]] peludos")]

$djsEval[message.guild.channels.cache.get("1465535257297027214").setName("🐾 | $membersCount[$guildID;all;false] peludos")]

$djsEval[message.guild.channels.cache.get("1465534760620392722").setName("💬 | $getGuildVar[guildMonthMessages;$guildID] mensagens")]

$cacheMembers[$guildID;false]

$onlyIf[$guildID==1462224054676099094;]
`
}]
// Teste