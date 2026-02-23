module.exports = [{
    type: 'clientReady',
    code: `
$cron[
$deleteMemberVar[metaXP]
$deleteMemberVar[messageMonth]
$deleteMemberVar[votesMonth]
$deleteMemberVar[msgXP]

$deleteGuildVar[membersJoinedMonth]
$deleteGuildVar[guildMonthMessages]
;0 0 1 * *;America/Recife]
 
 `
},{
    type: 'clientReady',
    code: `
$cron[$sendMessage[$getGuildVar[batePapo;1462224054676099094];
# 🌞 BOM DIA PELUDOS!
**Vamos levantar e tomar uma xícara de café?**
];0 6 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;1462224054676099094];
# 🍱 JÁ PODE ALMOÇAR!
**Liberei o almoço, vão almoçar enquanto dá tempo!**
];38 11 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;1462224054676099094];
# 🍱 FIM DO ALMOÇO
**Permissão para almoçar foi cancelada.**
];34 13 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;1462224054676099094];
# 🌃 BOA NOITE
**Bora finalizar o dia com muitos cafunés e conversa boa! Quem vem? ✨**
];0 18 * * *;America/Recife]
$cron[$sendMessage[$getGuildVar[batePapo;1462224054676099094];
# 😴 VAMOS DORMIR?
**Vamos tirar um cochilo?**
];0 22 * * *;America/Recife]
`
}]