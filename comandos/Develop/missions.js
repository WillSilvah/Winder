module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$getGlobalUserVar[messageTotal;$authorID]==$getGlobalUserVar[messageMeta;$authorID];
{execute:missionMeta-1}
]
$ifAwaited[$getGlobalUserVar[messageTotal;$authorID]>=200;
{execute:missionMeta-2}
]
$ifAwaited[$getGlobalUserVar[messageTotal;$authorID]==1300;
{execute:missionMeta-3}
]
$ifAwaited[$getGlobalUserVar[msgXPtotal;$authorID]>=$getGlobalUserVar[metaXPtotal;$authorID];
{execute:missionMeta-4}
]

$reply
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "missionMeta-1",
type: "awaited",
code: `
Você enviou $getGlobalUserVar[messageTotal;$authorID] mensagens! >w<
> **Ganhou +$get[xp] PDA!**

$setGlobalUserVar[msgXP;$sum[$getGlobalUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setGlobalUserVar[msgXPtotal;$sum[$getGlobalUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$setGlobalUserVar[messageMeta;$sum[$getGlobalUserVar[messageMeta;$authorID];1000];$authorID]

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
$addButton[1;Avalie a Patinhas!;link;https://disboard.org/pt-br/review/create/$getVar[guildID];false]
$reply
`
},{
name: "missionMeta-4",
type: "awaited",
code: `
Você está no **nível $truncate[$numberSeparator[$getGlobalUserVar[msgXPtotal;$authorID];.]]** de pontos de atividades neste mês! Continue conversando :3

$reply
$setGlobalUserVar[metaXPtotal;$sum[$getGlobalUserVar[metaXPtotal;$authorID];1000];$authorID]
`
}]