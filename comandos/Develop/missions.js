module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$getUserVar[messageTotal;$authorID]==$getUserVar[messageMeta;$authorID];
{execute:missionMeta-1}
]
$ifAwaited[$getUserVar[messageTotal;$authorID]>=200;
{execute:missionMeta-2}
]
$ifAwaited[$getUserVar[messageTotal;$authorID]==1300;
{execute:missionMeta-3}
]

$reply
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]

$onlyIf[$guildID==1462224054676099094;]
`
},{
name: "missionMeta-1",
type: "awaited",
code: `
Você enviou $getUserVar[messageTotal;$authorID] mensagens! >w<
> **Ganhou +$get[xp] PDA!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$setUserVar[messageMeta;$sum[$getUserVar[messageMeta;$authorID];1000];$authorID]

$let[xp;$random[10;20]]
$reply
`
},{
name: "missionMeta-2",
type: "awaited",
code: `
Você agora é um **Peludo Verificado**! <a:pats_foxClapping:1464004652931616768> Você está gostando da Patinhas? 👀

$clientTyping
$giveRole[$getVar[guildID];$authorID;$getVar[memberVerifiedRole]]

$onlyIf[$hasRoles[$getVar[guildID];$authorID;$getVar[memberVerifiedRole]]==false;]
$reply
$cooldown[1m;]
`
},{
name: "missionMeta-3",
type: "awaited",
code: `
Está gostando da Patinhas <@$authorID>? Você pode avaliar a Patinhas no Disboard?

Muito obrigado por continuar com a gente! 😃
$addButton[1;Avalie a Patinhas!;link;https://disboard.org/pt-br/review/create/$guildID;false]
$reply
`
},{
name: "missionMeta-4",
type: "awaited",
code: `
$reply Você tem **$getUserVar[msgXPtotal;$authorID]** de pontos de atividades neste mês! Continue conversando :3
$setUserVar[metaXPtotal;$sum[$getUserVar[metaXPtotal;$authorID];1000];$authorID]

$onlyIf[$getUserVar[msgXPtotal;$authorID]<=1000;]
$onlyIf[$hasRoles[$getVar[guildID];$authorID;$getVar[memberVerifiedRole]]==true;]
`
}]