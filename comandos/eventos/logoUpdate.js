# module.exports = {
 type: 'clientReady',
 code: `
$cron[$!setGuildIcon[1462224054676099094;$logo[light;orange];Domingo de manhã]
;0 6 * * 0;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[dark;orange];Domingo a noite]
;0 18 * * 0;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[light;red];Dia normal de manhã]
;0 6 * * 1-2;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[dark;red];Dia normal a noite]
;0 18 * * 1-2;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[light;pink];Às quartas feiras nós usamos rosa]
;0 6 * * 3;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[dark;pink];As quartas feiras nós usamos rosa]
;0 18 * * 3;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[light;red];Dia normal de manhã]
;0 6 * * 4-6;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[dark;red];Dia normal a noite]
;0 18 * * 4-6;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;$logo[dark;sleep];Hora de dormir]
;0 22 * * *;America/Recife]
`
}
