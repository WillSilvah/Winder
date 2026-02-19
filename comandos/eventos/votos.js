module.exports = {
 type: 'guildMemberUpdate',
 code: `
$if[$oldMember[addedRoles]==$getGuildVar[memberVotedRole;$guildID];
$setUserVar[votesMonth;$math[$getUserVar[votesMonth]+1]]

$setUserVar[votesTotal;$math[$getUserVar[votesTotal]+1]]


$sendMessage[$getGuildVar[batePapo];
$title[@$username votou!]
$description[
Vamos votar você também?
]
$footer[$getUserVar[votesMonth;$authorID] Votos neste mês | $getUserVar[votesTotal;$authorID] no total.]
$thumbnail[$userAvatar]
$color[Green]

$addActionRow
$addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;✅;false]
]

$if[$isUserDMEnabled==true;
$sendDM[$authorID;$title[🥰 Muito obrigado por ter votado!]
$description[
Ativei um $bold[bônus de pontos de atividades] para ganhar mais pontos enquanto conversa e interage na patinhas!
Neste mês você já votou **$getUserVar[votesMonth;$authorID]** vezes!
]
$footer[Quer ser lembrado de votar? use $getGuildVar[prefixo]lembrarvoto]
$color[Red]
]
]
]
$if[$oldMember[removedRoles]==$getGuildVar[memberVotedRole;$guildID];
$if[$getMemberVar[reminderStatus;$authorID]==true;
$sendDM[$authorID;
$title[Ei! Tá na hora de votar! $emoji[$emojiID[pats_vicksyWave]]]
$description[
A patinhas precisa crescer e ser cada vez mais conhecida no mundo, vamos ajudar neste objetivo?

https://discords.com/servers/$guildID/upvote
]
$thumbnail[$guildIcon[$guildID]]
$color[Red]
]
]
]


`
}


