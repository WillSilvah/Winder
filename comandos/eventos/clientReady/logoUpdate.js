module.exports = [{
 type: 'clientReady',
 code: `
$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/F47676pR/pats-orange-light.png;Domingo de manhã]
$setGuildVar[guildColor;#e6d3ad;1462224054676099094]
;0 6 * * 0;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/sJKW9fGZ/pats-orange-dark.png;Domingo a noite]
$setGuildVar[guildColor;#e6d3ad;1462224054676099094]
;0 18 * * 0;America/Recife]


$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/RpnZ5xH0/pats-red-light.png;Dia normal de manhã]
$setGuildVar[guildColor;#e6adad;1462224054676099094]
;0 6 * * 1-2;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/Pzm985S9/pats-red-dark.png;Dia normal a noite]
$setGuildVar[guildColor;#e6adad;1462224054676099094]
;0 18 * * 1-2;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/Jj1VwWsF/pats-pink-light.png;Às quartas feiras nós usamos rosa]
$setGuildVar[guildColor;#e7ade7;1462224054676099094]
;0 6 * * 3;America/Recife]
$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/cK7H7ry2/pats-pink-dark.png;As quartas feiras nós usamos rosa]
$setGuildVar[guildColor;#e7ade7;1462224054676099094]
;0 18 * * 3;America/Recife]
$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/RpnZ5xH0/pats-red-light.png;Dia normal de manhã]
;0 6 * * 4-6;America/Recife]
$setGuildVar[guildColor;#e6adad;1462224054676099094]
$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/Pzm985S9/pats-red-dark.png;Dia normal a noite]
;0 18 * * 4-6;America/Recife]
$setGuildVar[guildColor;#e6adad;1462224054676099094]
$cron[
$onlyIf[$getGuildVar[guildIconDefault;1462224054676099094]==true;]
$!setGuildIcon[1462224054676099094;https://i.ibb.co/N6q4DP0P/pats-sleep-logo.png;Hora de dormir]
$setGuildVar[guildColor;#ddf3fe;1462224054676099094]
;0 22 * * *;America/Recife]
`
}]
