module.exports = {
 type: 'clientReady',
 code: `
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/F47676pR/pats-orange-light.png;Domingo de manhã]
;0 6 * * 0;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/sJKW9fGZ/pats-orange-dark.png;Domingo a noite]
;0 18 * * 0;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/RpnZ5xH0/pats-red-light.png;Dia normal de manhã]
;0 6 * * 1-2;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/Pzm985S9/pats-red-dark.png;Dia normal a noite]
;0 18 * * 1-2;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/Jj1VwWsF/pats-pink-light.png;Às quartas feiras nós usamos rosa]
;0 6 * * 3;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/cK7H7ry2/pats-pink-dark.png;As quartas feiras nós usamos rosa]
;0 18 * * 3;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/RpnZ5xH0/pats-red-light.png;Dia normal de manhã]
;0 6 * * 4-6;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/Pzm985S9/pats-red-dark.png;Dia normal a noite]
;0 18 * * 4-6;America/Recife]
$cron[$!setGuildIcon[1462224054676099094;https://i.ibb.co/N6q4DP0P/pats-sleep-logo.png;Hora de dormir]
;0 22 * * *;America/Recife]


`
}
