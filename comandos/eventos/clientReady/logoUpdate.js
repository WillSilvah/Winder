module.exports = [{
    type: 'clientReady',
    code: `
    $let[id;1462224054676099094]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_orangeLight;$get[id]];Domingo de manhã]
$setGuildVar[guildColor;#e6d3ad;$get[id]]
;0 5 * * 0;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_orangeDark;$get[id]];Domingo a noite]
$setGuildVar[guildColor;#e6d3ad;$get[id]]
;0 19 * * 0;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_redLight;$get[id]];Dia normal de manhã]
$setGuildVar[guildColor;#e6adad;$get[id]]
;0 5 * * 1-2,4-6;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_redDark;$get[id]];Dia normal a noite]
$setGuildVar[guildColor;#e6adad;$get[id]]
;0 19 * * 1-2,4-6;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_pinkLight;$get[id]];Quarta rosa]
$setGuildVar[guildColor;#e7ade7;$get[id]]
;0 5 * * 3;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_pinkDark;$get[id]];Quarta rosa noite]
$setGuildVar[guildColor;#e7ade7;$get[id]]
;0 19 * * 3;America/Recife]

$cron[
$onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
$!setGuildIcon[$get[id];$getGuildVar[logo_sleep;$get[id]];Hora de dormir]
$setGuildVar[guildColor;#ddf3fe;$get[id]]
;0 22 * * *;America/Recife]
`
},{
    type: 'clientReady',
    code: `
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];$getGuildVar[logo_copabr;$get[id]];Dia da copa!]
     $setGuildVar[guildColor;#039c3d;$get[id]]
    ;* * 5 7 *;America/Recife]
    
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];https://public-blob.squarecloud.dev/494795833351602176/pats_diadosnamorados.png;Dia dos namorados!]
     $setGuildVar[guildColor;#be1931;$get[id]]
    ;* * 12 6 *;America/Recife]
    
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];$getGuildVar[logo_copabr;$get[id]];Dia da copa!]
     $setGuildVar[guildColor;#039c3d;$get[id]]
    ;* * 13 6 *;America/Recife]
    
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];$getGuildVar[logo_copabr;$get[id]];Dia da copa!]
     $setGuildVar[guildColor;#039c3d;$get[id]]
    ;* * 19 6 *;America/Recife]
    
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];$getGuildVar[logo_copabr;$get[id]];Dia da copa!]
     $setGuildVar[guildColor;#039c3d;$get[id]]
    ;* * 24 6 *;America/Recife]
    
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];$getGuildVar[logo_bahia;$get[id]];Independência da Bahia!]
     $setGuildVar[guildColor;#039c3d;$get[id]]
    ;* 6 2 7 *;America/Recife]
    
    $cron[
     $onlyIf[$getGuildVar[guildIconDefault;$get[id]]==true;]
     $!setGuildIcon[$get[id];$getGuildVar[logo_bahia;$get[id]];Independência da Bahia!]
     $setGuildVar[guildColor;#039c3d;$get[id]]
    ;5 19 2 7 *;America/Recife]
    
    `
  }]
