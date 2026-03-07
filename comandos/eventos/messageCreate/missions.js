module.exports = [{
    type: "messageCreate",
    code: `
$onlyIf[$guildID==1462224054676099094;]

$if[$getUserVar[messageTotal;$authorID]>=6;
$!memberAddRoles[$guildID;$authorID;$getGuildVar[allMemberRole;$guildID]]
]

$if[$getMemberVar[messageTotal;$authorID]>=200;
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false;]

$sendMessage[$channelID;<@$authorID> | Você agora é um **Peludo Verificado**! $emoji[$emojiID[pats_foxClapping]] Você está gostando da Patinhas? 👀;false]

$!memberAddRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]
]

$if[$getGuildVar[guildMonthMessages;$guildID]==$getGuildVar[guildMonthMessagesMeta;$guildID];

$setGuildVar[guildMonthMessagesMeta;$math[$getGuildVar[guildMonthMessagesMeta;$guildID]+10000];$guildID]
]

$if[$getMemberVar[messageTotal;$authorID]==6;
$reply[$channelID;$messageID]
$startTyping[$channelID]
$wait[2s]
$sendMessage[$channelID;Olá, seja bem vindo(a) a patinhas! 👋 Vim te contar que para ter acesso a enviar mídia nos canais de texto você precisa enviar **200 mensagens**, é bem rápido. Veja suas informações em **/perfil**👀
]
$startTyping[$channelID]
$wait[7s]
$sendMessage[$channelID;Não é necessário usar o **/perfil** toda hora, irei te avisar no momento em que conseguir, relaxe! 😊
]
$startTyping[$channelID]
$wait[4s]
$sendMessage[$channelID;Dúvidas? Qualquer coisa o canal <#1463277652562411787> está disponível. Se divirta na patinhas! 
]
$startTyping[$channelID]
$wait[2s]
$sendMessage[$channelID;😘]
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
Cálculo atual: **$media[messageMonth;$guildMemberCount[1462224054676099094;;false]]**

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
