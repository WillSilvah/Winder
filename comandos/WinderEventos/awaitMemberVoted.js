module.exports = [{
name: "awaitMemberVoted",
type: "memberUpdate",
channel: "$getGuildVar[batePapo]",
code: `
$ifAwaited[$getUserVar[votesMonth;$authorID]==100;
{execute:100votes}
]
$ifAwaited[$getUserVar[votesMonth;$authorID]==60;
{execute:60votes}
]
$ifAwaited[$getUserVar[votesMonth;$authorID]==30;
{execute:30votes}
]
$ifAwaited[$getUserVar[votesTotal;$authorID]==1;
{execute:firstVote}
]


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
},{
name: "firstVote",
type: "awaited",
code: `
<@$authorID>
## PRIMEIRO VOTO
**Vote na Patinhas pela primeira vez!**
Muito obrigado por ajudar a Patinhas a crescer votando nela! Agradeço bastante por isso, continue votando nela para ganhar prêmios e conquistas! 

$wait[2s]
$clientTyping
`
},{
name: "30votes",
type: "awaited",
code: `
<@$authorID>
## 30 VOTOS!
**Vote na Patinhas 30 vezes neste mês!**
Fico muito feliz em saber que você está empenhado no objetivo de ajudar a patinhas em ser mais conhecida nesse mundo! 
> **Ganhou +$get[xp] pontos!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;150]
$wait[2s]
$clientTyping
`
},{
name: "60votes",
type: "awaited",
code: `
<@$authorID>
## VOTOU SESSENTA VEZES!
**Vote na Patinhas 60 vezes neste mês!**
Ai que alegria **$username**, você votou 60 vezes na Patinhas, isso é tão incrível<3
Obrigado demais pela sua ajuda, vamos criar uma comunidade melhor juntos?
> **Ganhou +$get[xp] pontos!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;250]
$wait[2s]
$clientTyping
`
},{
name: "100votes",
type: "awaited",
code: `
<@$authorID>
## VOTOU CEM VEZES!
**Vote na Patinhas 100 vezes neste mês!**
Que empenho $username[$authorID]! você conseguiu (quase) bater o máximo de votos que pode se conseguir no mês no Discords.com, toda a <@$getVar[allStaffRole]> lhe agradece com isso. 
> **Ganhou +$get[xp] pontos!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;350]
$wait[2s]
$clientTyping
`
}]