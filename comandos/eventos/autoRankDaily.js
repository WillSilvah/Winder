module.exports = {
    type: 'clientReady',
    code: `
$jsonLoad[session;$readFile[Recursos/session.json]]

$setInterval[
$sendMessage[$getGuildVar[rankedChat;1462224054676099094];
$addContainer[
$addSection[
$addTextDisplay[# $env[session;name]
]

;Green]
];30m;autoRankDaily]
 
`
}