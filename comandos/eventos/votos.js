module.exports = {
 type: 'guildMemberUpdate',
 code: `
$if[$oldMember[addedRoles]==$getGuildVar[memberVotedRole;$guildID];
$setMemberVar[votesMonth;$math[$getMemberVar[votesMonth;$authorID;$guildID;0]+1]]

$setMemberVar[votesTotal;$math[$getMemberVar[votesTotal;$authorID;$guildID;0]+1]]


$sendMessage[$getGuildVar[batePapo];
$addSection[
$addTextDisplay[### ⬆️ <@$authorID> votou!
-# **$getMemberVar[votesMonth;$authorID;$guildID;0] votos neste mês!**]
$addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;⬆️;false]
]
$addSeparator[Large;true]
$deleteIn[5m]
]

$if[$isMemberDMEnabled==true;
$sendDM[$authorID;$title[🥰 Muito obrigado por ter votado!]
$description[
Ativei um $bold[bônus de pontos de atividades] para ganhar mais pontos enquanto conversa e interage na patinhas!
Neste mês você já votou **$getMemberVar[votesMonth;$authorID;$guildID;0]** vezes!
]
$footer[Quer ser lembrado de votar? use /lembrete voto]
$color[Red]
]
]
]
$if[$oldMember[removedRoles]==$getGuildVar[memberVotedRole;$guildID];
$if[$getMemberVar[reminderStatus;$authorID;$guildID;true]==true;
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


