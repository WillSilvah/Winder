module.exports = [{
name: "votedDiscords",
type: "memberUpdate",
channel: "$getVar[batePapo]",
code: `
$ifAwaited[$getGlobalUserVar[votesMonth;$authorID]==100;
{execute:100votes}
]
$ifAwaited[$getGlobalUserVar[votesMonth;$authorID]==60;
{execute:60votes}
]
$ifAwaited[$getGlobalUserVar[votesMonth;$authorID]==30;
{execute:30votes}
]
$ifAwaited[$getGlobalUserVar[votesTotal;$authorID]==1;
{execute:firstVote}
]

$sendDm[{newEmbed:
{title:Muito obrigado por ter votado!}
{description:
Seu voto no top.gg ajuda bastante! Obrigado por isso, todos nós agradecemos isto! 
Você ganhou **$get[xp]** pontos de atividades e neste mês você já votou **$getGlobalUserVar[votesMonth;$authorID]** vezes!
}
{footer:Quer ser lembrado de votar? use w!lembrarvoto}
{color:Green}
};$authorID]


$sendMessage[<@$authorID> {newEmbed:
{author:Obrigado @$username por ter votado na Patinhas!:https://cdn.discordapp.com/emojis/1181219202070237275.png?size=2048}
{description:
<@$authorID> votou na Patinhas no [**Discords**](https://discords.com/servers/$guildID/upvote) e ganhou um multiplicador de PDA de x0.1 e também ganhou **$get[xp] PDA**!
Vote você também!
}
{footer:@$username já votou $getGlobalUserVar[votesMonth;$authorID] vezes neste mês, $getGlobalUserVar[votesTotal;$authorID] vezes ao todo!}
{thumbnail:$userAvatar}
{color:Green}
}
]

$awaitExecute[countSystem]

$let[xp;$random[5;10]]

$onlyIf[$newMember[addedRoles]==$roleName[874385283100053564];]
`
},{
name: "countSystem",
type: "awaited",
code: `
$setGlobalUserVar[votesMonth;$sum[$getGlobalUserVar[votesMonth;$authorID];1];$authorID]
$setGlobalUserVar[votesTotal;$sum[$getGlobalUserVar[votesTotal;$authorID];1];$authorID]

$setGlobalUserVar[msgXP;$sum[$getGlobalUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setGlobalUserVar[msgXPtotal;$sum[$getGlobalUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]
`
},{
name: "remindVote",
type: "memberUpdate",
code: `
$sendDm[{newEmbed:
{author:$username[$clientID] lembretes:https://abs.twimg.com/emoji/v2/72x72/1f514.png}
{title:Ei! Tá na hora de votar!}
{description:
Lembra quando você votou 6 horas atrás na Patinhas? Foi incrivel eu estava lá comemorando junto com você <:pats_foxThumbsUp:1463245277304459345>

Vamos ter esta sensação novamente? <:pats_foxThinking:1463245311563661477> Eu te dou pontos de experiência, um multiplicador e você recebe fama e glória por ser um membro incrvel! 
Vamos lá
https://discords.com/servers/$guildID/upvote
}
{footer:Não quer ser lembrado de votar? use **w!lembrarvoto**}
{color:Green}

};$authorID]

$onlyIf[$getGlobalUserVar[reminderStatus;$authorID]==true;]

$onlyIf[$oldMember[removedRoles]==$roleName[1463342375370887209];]
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

$setGlobalUserVar[msgXP;$sum[$getGlobalUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setGlobalUserVar[msgXPtotal;$sum[$getGlobalUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

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

$setGlobalUserVar[msgXP;$sum[$getGlobalUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setGlobalUserVar[msgXPtotal;$sum[$getGlobalUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

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
Que empenho $username[$authorID]! Você conseguiu (quase) bater o máximo de votos que pode se conseguir no mês no Discords.com, toda a <@ lhe agradece com isso. 
> **Ganhou +$get[xp] pontos!**

$setGlobalUserVar[msgXP;$sum[$getGlobalUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setGlobalUserVar[msgXPtotal;$sum[$getGlobalUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;350]
$wait[2s]
$clientTyping
`
}]