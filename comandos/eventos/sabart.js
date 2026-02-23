module.exports = [{
    type: 'clientReady',
    code: `
$cron[
$writeFile[Recursos/sabart.json;{
"theme": "$getGuildVar[sabartTheme]",
"description": "$getGuildVar[sabartDescription]
};utf8]
$wait[2s]
$jsonLoad[sabart;$readFile[Recursos/sabart.json]]

$sendMessage[$getGuildVar[sabartAdvChat];
$addContainer[
$addTextDisplay[
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
;Yellow]
];0 9 * * 6;America/Recife]]  
    
    
    
`
}]