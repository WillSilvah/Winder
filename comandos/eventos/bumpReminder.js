module.exports = {
type: "messageCreate",
allowBots: true,
code: `
$onlyIf[$authorID==302050872383242240;]
$onlyIf[$checkContains[$message;Bump done!]]
$onlyIf[$channelID==1462796515578876079;]

`
}