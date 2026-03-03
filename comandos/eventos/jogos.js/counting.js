module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$channelID==1478505120525324541;]
$onlyIf[$isInteger[$message]==true;$deleteCommand]
$onlyIf[$message==$getGuildVar[coutingGame;$guildID;0];$deleteCommand]

$setGuildVar[coutingGame;$math[$getGuildVar[countingGame;$guildID;0]+1];$guildID]
    
`
}