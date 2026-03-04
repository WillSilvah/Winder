module.exports = [{
    type: "messageCreate",
    code: `
$onlyIf[$guildID==1462224054676099094;]

$if[$getMemberVar[messageTotal;$authorID]>=200;
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false;]

$sendMessage[$channelID;<@$authorID> | Você agora é um **Peludo Verificado**! $emoji[$emojiID[pats_foxClapping]] Você está gostando da Patinhas? 👀;false]

$!memberAddRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]
]

$if[$getGuildVar[guildMonthMessages;$guildID]==$getGuildVar[guildMonthMessagesMeta;$guildID];

$setGuildVar[guildMonthMessagesMeta;$math[$getGuildVar[guildMonthMessagesMeta;$guildID]+10000];$guildID]
]

$if[$getUserVar[messageTotal;$authorID]>=6;
$!memberAddRoles[$guildID;$authorID;$getGuildVar[allMemberRole;$guildID]]
]
`
},{
    type: "messageCreate",
    code: `
    $onlyIf[$guildID==1462224054676099094;]
$if[$getMemberVar[messageMonth;$authorID]>=$getGuildVar[guildActivityMedia];
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]==false;]
$!memberAddRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]

$sendMessage[1467318550925410485;
$title[O membro @$userTag é um membro ativo!]
$description[
Média de atividade do servidor atual: **$getGuildVar[guildActivityMedia]**
Cálculo atual: **$media[messageMonth;11]**

Mensagens enviadas neste mês: **$getMemberVar[messageMonth]**
Mensagens enviadas nesta semana: **$getMemberVar[messageWeekly]**
Mensagens enviadas hoje: **$getMemberVar[messageToday]**
Mensagens enviadas antes: **$getMemberVar[messageTotal]**
]
$thumbnail[$userAvatar]
$footer[$authorID]
$color[Green]
]
;
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]==true;]
$!memberRemoveRoles[$guildID;$authorID;$getGuildVar[memberActiveRole;$guildID]]
$sendMessage[1467318550925410485;
$title[O membro @$userTag não é um membro ativo.]
$description[
Média de atividade do servidor atual: **$getGuildVar[guildActivityMedia]**
Cálculo atual: **$media[messageMonth;11]**

Mensagens enviadas neste mês: **$getMemberVar[messageMonth]**
Mensagens enviadas $usertag nesta semana: **$getMemberVar[messageWeekly]**
Mensagens enviadas $usertag hoje: **$getMemberVar[messageToday]**
Mensagens enviadas $usertag antes: **$getMemberVar[messageTotal]**
]
$thumbnail[$userAvatar]
$footer[$authorID]
$color[Red]
]]
`
}]
