module.exports = {
    type: "messageCreate",
    code: `
$onlyIf[$guildID==1462224054676099094;]

$if[$getMemberVar[messageTotal;$authorID]>=150;
$onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==false;]

$sendMessage[$channelID;<@$authorID> | Você agora é um **Peludo Verificado**! $emoji[$emojiID[pats_foxClapping]] Você está gostando da Patinhas? 👀;false]

$!memberAddRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]
]

$if[$getGuildVar[guildMonthMessages;$guildID]==$getGuildVar[guildMonthMessagesMeta;$guildID];

$setGuildVar[guildMonthMessagesMeta;$math[$getGuildVar[guildMonthMessagesMeta;$guildID]+10000];$guildID]
$startTyping[]
$wait[5s]

$sendMessage[$getGuildVar[batePapo;$guildID];
$title[Vocês enviaram $getGuildVar[guildMonthMessagesMeta;$guildID] mensagens neste mês!]
$color[Green]
]
]

$if[$getUserVar[messageTotal;$authorID]<=6;
$!memberAddRoles[$guildID;$authorID;$getGuildVar[allMemberRole;$guildID]]
]
`,
nonprefixed: true
}