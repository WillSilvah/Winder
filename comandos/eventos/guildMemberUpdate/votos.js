module.exports = {
 type: 'guildMemberUpdate',
 code: `
$if[$oldMember[addedRoles]==$getGuildVar[memberVotedRole;$guildID];
$setMemberVar[votesMonth;$math[$getMemberVar[votesMonth;$authorID;$guildID;0]+1]]

$setMemberVar[votesTotal;$math[$getMemberVar[votesTotal;$authorID;$guildID;0]+1]]

$let[pda;5]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$authorID;$guildID;$get[pda]];$get[pda]]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$authorID;$guildID;$get[pda]];$get[pda]]]

$sendMessage[$getGuildVar[batePapo];
$addSection[
$addTextDisplay[### ⬆️ <@$authorID> votou!
-# **$getMemberVar[votesMonth;$authorID;$guildID;0] votos neste mês! | ✨ +$get[pda]**]
$addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;⬆️;false]
]
$addSeparator[Large;true]
$deleteIn[5m]
]

$if[$isUserDMEnabled==true;
$sendDM[$authorID;$title[🥰 Muito obrigado por ter votado!]
$description[
Ativei um $bold[bônus de pontos de atividades] para ganhar mais pontos enquanto conversa e interage na patinhas!
Neste mês você já votou **$getMemberVar[votesMonth;$authorID;$guildID;0]** vezes!
]
$footer[Quer ser lembrado de votar? use /lembrete voto]
$color[Red]
]
]


$advancedTimeout[$esc[
$sendDM[{0};
$title[Ei! Tá na hora de votar! $emoji[$emojiID[pats_vicksyWave]]]
$description[
A patinhas precisa crescer e ser cada vez mais conhecida no mundo, vamos ajudar neste objetivo?

https://discords.com/servers/{1}/upvote
]
$thumbnail[$guildIcon[{1}]]
$color[Red]
]
];6h;VotesReminder-$authorID;$authorID;$guildID]

$if[$getMemberVar[votesTotal;$authorID;$guildID;0]==60;
$!memberAddRoles[$guildID;$authorID;$getGuildVar[memberSupporterRole;$guildID]]

$sendMessage[$getGuildVar[batePapo];
<@$authorID> Obrigado por ter votado 60 vezes na Patinhas! ❤️
]

]

]
`
}


