module.exports = [{
name: "rank",
code:`$awaitMessages[$channelID;$authorID;30s;adoros,ativos,cataventos,premiados,bump,total ativos;total ativos,adoros,ativos,cataventos,premiados,bump;<@$authorID> | Eu não gostei dessa sua resposta, portanto irei dormir, boa noite.]
$botTyping
<@$authorID> | Qual ranking você quer ver?

> **❤️ adoros = Ranking dos membros mais adorados do servidor**
> **💬 ativos = Veja os membros mais ativos!**
> **💬 tota ativos = Veja os membros mais ativos em todos os períodos**
> **🌼 cataventos = Veja os membros com a maior quantidade de cataventos.**
> **⭐ premiados = Veja os membros mais ativos de cada mês!**
> **😺 Bump = Veja os membros que mais bumparam a pinwheel!**
*Digite no chat, a opção que deseja ver*

$cooldown[10s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]
`
},{
name: "adoros",
type:"awaited",
code: `$reply
$botTyping
<@$authorID>
$author[1;Membros mais adorados da pinwheel]
$color[1;RANDOM]
$description[1;:heart: - $splitText[1]
2º $splitText[2]
3º $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;rep;asc;{tag} - {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
`
},{
name: "total ativos",
type:"awaited",
code: `$reply
<@$authorID>
$author[1;Os membros mais ativos em toda história pinwheel:]
$color[1;RANDOM]
$description[1;**TOP 1** - $splitText[1]
**TOP 2** - $splitText[2]
**TOP 3** - $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;totalmensagens;asc;{tag} - {value}];\n]
$footer[1;Você enviou: $getUserVar[totalmensagens] mensagens]
$thumbnail[1;$getVar[thumbrank]]
$botTyping
`
},{
name: "ativos",
type:"awaited",
code: `$reply
<@$authorID>
$author[1;Os membros mais ativos:]
$color[1;RANDOM]
$description[1;**TOP 1** - $splitText[1]
**TOP 2** - $splitText[2]
**TOP 3** - $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;mensagens;asc;{tag} - {value}];\n]
$footer[1;Soma de mensagens enviadas: $getServerVar[allmensagens] | Você: $getUserVar[mensagens]]
$thumbnail[1;$getVar[thumbrank]]
 $botTyping
`
},{
name: "cataventos",
type:"awaited",
code: `$botTyping
<@$authorID>
$author[1;Membros com mais cataventos:]
$color[1;RANDOM]
$description[1;**TOP 1** - $splitText[1]
**TOP 2** - $splitText[2]
**TOP 3** - $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;cataventos;asc;{tag} - {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
`
},{
name: "premiados",
type:"awaited",
code: `$reply
<@$authorID> |
$title[1;Membros que foram os mais ativos de cada mês]
$description[1;
$addField[1;Janeiro de 2022;aelusi#0099 (400785627165097985)]
$addField[1;Fevereiro de 2022;Fulano#0000]
]
$thumbnail[1;$getVar[thumbrank]]
$footer[1;Quer aparecer aqui? Tente ser os 3 top membros ativos!]
`
},{
name: "bump",
type:"awaited",
code: `$reply
$botTyping
$author[1;Membros que mais bumparam a pinwheel]
$color[1;RANDOM]
$description[1;**TOP 1** - $splitText[1]
**TOP 2** - $splitText[2]
**TOP 3** - $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;bump;asc;{tag} -឵឵ {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
`
}]
