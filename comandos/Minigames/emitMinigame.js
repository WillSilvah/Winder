module.exports = [{
name: "minigame emit",
desc: "Force a inicialização de um drop de catavento",
aliases: ["dropemit", "dropstart"],
category: "Desenvolvedor",
usage: "drop emit",
code: `
$setUserVar[minigameCount;$sum[$getUserVar[minigameCount;$clientID];1];$clientID]

$setGuildVar[minigameXPmin;0]
$setGuildVar[minigameXPmax;0]
$slowmode[0s;$getGuildVar[batePapo]]
$channelSendMessage[$getGuildVar[batePapo];###  EVENTO DE CHAT FOI CANCELADO!]

$setGuildVar[minigameStatus;false]
$setGuildVar[minigameLastUser;$clientID]
$setGuildVar[minigameWord;canotipo]

$clientTyping
$onlyIf[$getGuildVar[minigameStatus]==true;]

$wait[1m]
$setGuildVar[minigameXPmin;5]
$setGuildVar[minigameXPmax;15]

$ifAwaited[1==1;{execute:drop-$ifAwaited[$message[1]==;$random[1;4];$message[1]]}]

$deleteCommand
$suppressErrors

$useChannel[$getGuildVar[batePapo]]

$setGuildVar[minigameEmit;true;$guildID]
$onlyPerms[administrator;<@$authorID> Você precisa ter a permissão de administrador para usar este comando.]
`
}] 
