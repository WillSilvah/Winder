module.exports = [{
name: "leave-alone",
type: "awaited",
code: `
$clearQueue

$author[1;Me deixaram sozinho...;$readFile[Recursos/musiclogo.txt]]
$description[1;
Como ninguém estava ouvindo músicas comigo, eu sai do canal de  voz...]
$color[1;Blue]

$suppressErrors
`
},{
name: "leave-vc",
type: "awaited",
code: `
$log[$leaveVC]

$setStatus[;;online]
$setUserNickname[$clientID;;]

$setGuildVar[musicCount;0]
$setGuildVar[musicTimeCount;0]

$channelSendMessage[1169085605993529374;{newEmbed:
{author:Não há mais músicas para tocar na fila.:$readFile[Recursos/musiclogo.txt]}
{description:
Toquei música por **$humanizeMs[$getGuildVar[musicTimeCount]]** e toquei **$getGuildVar[musicCount]** músicas!
}
{color:Blue}
}]

$suppressErrors
`
},{
name: "skipForce",
type: "awaited",
code: `
$ifAwaited[$getGuildVar[nightMusic;$guildID]==true;{execute:autoban-music}]

$author[1;❌ Essa música é incompatível neste momento.]
$description[1;[$get[title]]($get[url])]
$footer[1;Pedido por: $userTag[$get[requester]]]
$color[1;Blue]
$skipTrack

$suppressErrors
$let[userID2;$get[requester]]
`
},{
name: "autoban-music",
type: "awaited",
code: `

$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]
$ifAwaited[1==1;{execute:punishment-log}]

$setTimeout[autounban-music;12h;{
"userID": "$get[userID]"
};false;]

$setUserVar[musicBanReason;$ifAwaited[$get[reason]!=;$get[reason];Não sei qual foi o motivo, só sei que está bloqueado de usar o Winder Music];$get[userID];861313067291115541]
$setUserVar[musicBan;true;$get[userID];$guildID]

$let[staffID;$clientID]
$let[userID;$get[userID2]]
$let[reason;Tentar reproduzir músicas impróprias para o consumo em um evento musical.]
$let[puniType;banido de usar o Winder Music]
`
},{
name: "autounban-music",
type: "timeout",
code: `
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]
$ifAwaited[1==1;{execute:punishment-log}]

$setUserVar[musicBanReason;$ifAwaited[$get[reason]!=;$get[reason];Não sei qual foi o motivo, só sei que está bloqueado de usar o Winder Music];$get[userID];861313067291115541]
$setUserVar[musicBan;false;$get[userID];$guildID]


$let[staffID;$clientID]
$let[userID;$timeoutData[userID]]
$let[reason;Seu tempo de bloqueio do Winder Music terminou.]
$let[puniType;desbanido de usar o Winder Music]

`
}]