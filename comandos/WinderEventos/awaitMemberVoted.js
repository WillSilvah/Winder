module.exports = [{
name: "awaitMemberVoted",
type: "memberUpdate",
channel: "$getGuildVar[batePapo]",
code: `
$sendMessage[{newEmbed:
{author:@$username votou!:$userAvatar}
{description:
O **Bônus de Pontos de Atividade** foi ativado e ganhou **$get[xp] PDA**!
}
{footer:$getUserVar[votesMonth;$authorID;$guildID] Votos neste mês | $getUserVar[votesTotal;$authorID;$guildID] no total.}
{color:Green}
}
{actionRow:
{button:Vote na Patinhas! (Discords.com):link:https://discords.com/servers/$guildID/upvote:false:}
}
]

$setUserVar[votesMonth;$sum[$getUserVar[votesMonth;$authorID];1];$authorID]
$setUserVar[votesTotal;$sum[$getUserVar[votesTotal;$authorID];1];$authorID]
$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;$random[1;5]]

$onlyIf[$newMember[addedRoles]==$roleName[$getVar[memberVotedRole]];]
`
}]