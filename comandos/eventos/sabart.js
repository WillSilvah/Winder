module.exports = [{
    type: 'clientReady',
    code: `
$cron[
$writeFile[Recursos/sabart.json;{
"theme": "$getGuildVar[sabartTheme;1462224054676099094]",
"description": "$getGuildVar[sabartDescription;1462224054676099094]"
};utf8]
$wait[2s]
$jsonLoad[sabart;$readFile[Recursos/sabart.json]]

$sendMessage[$getGuildVar[sabartAdvChat;1462224054676099094];
$addContainer[
$addTextDisplay[
<@&$getGuildVar[memberArtistRole;1462224054676099094]>
# $toUpperCase[$env[sabart;theme]]
]
$addTextDisplay[$bold[$env[sabart;description]]]
$addSeparator
$addTextDisplay[
- Crie uma arte envolvendo o tema acima e poste em <#1468639302333501660> com a tag 🎨Sabart.
- Não utilize ferramentas de Inteligência Artificial para criar as artes.
- O tema dura a semana toda até o próximo sábado às 8:59.
- Dúvidas? Chame algum staff.
]
;Yellow]]

$sendMessage[$getGuildVar[batePapo;1462224054676099094];
$author[Sabarte;https://abs.twimg.com/emoji/v2/72x72/1f3a8.png]
$title[$toUpperCase[$env[sabart;theme]]]
$description[
$env[sabart;description]
]
$footer[Bons desenhos aos artistas!]
$color[Yellow]
]
;0 9 * * 6;America/Recife]]  
    
    
    
`
}]