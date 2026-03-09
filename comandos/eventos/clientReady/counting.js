module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$channelID==1478505120525324541;]
$onlyIf[$isInteger[$message]==true;$deleteCommand]
$onlyIf[$message==$getGuildVar[countingGame;$guildID;0];$deleteCommand]

$setGuildVar[countingGame;$math[$getGuildVar[countingGame;$guildID;0]+1];$guildID]
    
`
}