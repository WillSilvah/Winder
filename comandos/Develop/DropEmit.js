module.exports = [{
name: "drop emit",
desc: "Force a inicialização de um drop de catavento",
aliases: ["dropemit", "dropstart"],
category: "Desenvolvedor",
usage: "drop emit",
code: `
$setGuildVar[pickEmit;false;861313067291115541]
$setUserVar[pickCount;$sum[$getUserVar[pickCount;$clientID;861313067291115541];1];$clientID;861313067291115541]

$setGuildVar[pickXPmin;0;861313067291115541]
$setGuildVar[pickXPmax;0;861313067291115541]
$slowmode[0s;861337787192836117]
$sendMessage[### 🚫 EVENTO DE CHAT FOI CANCELADO!]

$setGuildVar[pickStatus;false;861313067291115541]
$setGuildVar[pickLastUser;$clientID;861313067291115541]
$setGuildVar[pickWord;canotipo;861313067291115541]
$clientTyping
$onlyIf[$getGuildVar[pickStatus;861313067291115541]==true;]
$wait[1m]
$setGuildVar[pickXPmin;0;861313067291115541]
$setGuildVar[pickXPmax;10;861313067291115541]
$onlyIf[$getGuildVar[pickStatus;861313067291115541]==true;]

$wait[1m]
$setGuildVar[pickXPmin;10;861313067291115541]
$setGuildVar[pickXPmax;20;861313067291115541]
$onlyIf[$getGuildVar[pickStatus;861313067291115541]==true;]

$wait[1m]
$setGuildVar[pickXPmin;20;861313067291115541]
$setGuildVar[pickXPmax;30;861313067291115541]

$wait[1s]
$setGuildVar[pickXPmin;40;861313067291115541]
$setGuildVar[pickXPmax;50;861313067291115541]

$onlyIf[$getGuildVar[pickStatus;861313067291115541]==true;]

$ifAwaited[1==1;{execute:drop-$ifAwaited[$message[1]==;$random[1;4];$message[1]]}

$deleteCommand
$suppressErrors
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

$useChannel[861337787192836117]

$setGuildVar[pickEmit;true;861313067291115541]
`
}] 
