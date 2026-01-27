module.exports = [{
name: "drop emit",
desc: "Force a inicialização de um drop de catavento",
aliases: ["dropemit", "dropstart"],
category: "Desenvolvedor",
usage: "drop emit",
code: `
$setUserVar[pickCount;$sum[$getUserVar[pickCount;$clientID;$getVar[guildID]];1];$clientID;$getVar[guildID]]

$setGuildVar[pickXPmin;0;$getVar[guildID]]
$setGuildVar[pickXPmax;0;$getVar[guildID]]
$slowmode[0s;1462224055884189781]
$channelSendMessage[$getVar[batePapo];###  EVENTO DE CHAT FOI CANCELADO!]

$setGuildVar[pickStatus;false;$getVar[guildID]]
$setGuildVar[pickLastUser;$clientID;$getVar[guildID]]
$setGuildVar[pickWord;canotipo;$getVar[guildID]]

$clientTyping
$onlyIf[$getGuildVar[pickStatus;$getVar[guildID]]==true;]

$wait[1m]
$setGuildVar[pickXPmin;20;$getVar[guildID]]
$setGuildVar[pickXPmax;30;$getVar[guildID]]

$ifAwaited[1==1;{execute:drop-$ifAwaited[$message[1]==;$random[1;4];$message[1]]}

$deleteCommand
$suppressErrors
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$useChannel[861337787192836117]

$setGuildVar[pickEmit;true;861313067291115541]
`
}] 
