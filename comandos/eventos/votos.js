module.exports = {
 type: 'guildMemberUpdate',
 code: `
$if[$oldMember[addedRoles]==$getGuildVar[memberVotedRole;$guildID];
$setMemberVar[votesMonth;$math[$getMemberVar[votesMonth]+1]]

$setMemberVar[votesTotal;$math[$getMemberVar[votesTotal]+1]]


$sendMessage[$getGuildVar[batePapo];
$title[@$username votou!]
$description[
Vamos votar você também?
]
$footer[$getMemberVar[votesMonth;$authorID] Votos neste mês | $getMemberVar[votesTotal;$authorID] no total.]
$thumbnail[$userAvatar]
$color[Green]

$addActionRow
$addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;✅;false]
]

$if[$isMemberDMEnabled==true;
$sendDM[$authorID;$title[🥰 Muito obrigado por ter votado!]
$description[
Ativei um $bold[bônus de pontos de atividades] para ganhar mais pontos enquanto conversa e interage na patinhas!
Neste mês você já votou **$getMemberVar[votesMonth;$authorID]** vezes!
]
$footer[Quer ser lembrado de votar? use /lembrete voto]
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


