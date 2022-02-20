module.exports = [{
name: "novorank",
code:`$awaitMessages[$channelId;$authorID;10s;adoros,ativos,catavento,premiados;adoros,ativos,catavento,premiados;deu erro]
$botTyping
<@$authorID> | Qual ranking vocรช quer ver?

> **โค๏ธ adoros = Ranking dos membros mais adorados do servidor**
> **๐’ฌ ativos = Veja os membros mais ativos!**
> **๐ผ catavento = Veja os membros com a maior quantidade de cataventos.**
> **โญ premiados = Veja os membros mais ativos de cada mรชs!**
> **๐บ Miau = Miau**

$cooldown[30s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]
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
2ยบ $splitText[2]
3ยบ $splitText[3]
4ยบ $splitText[4]
5ยบ $splitText[5]
6ยบ $splitText[6]
7ยบ $splitText[7]
8ยบ $splitText[8]
9ยบ $splitText[9]
10ยบ $splitText[10]
$textSplit[$userLeaderboard[$guildID;rep;asc;{tag} -แตแต {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
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
4ยบ $splitText[4]
5ยบ $splitText[5]
6ยบ $splitText[6]
7ยบ $splitText[7]
8ยบ $splitText[8]
9ยบ $splitText[9]
10ยบ $splitText[10]
$textSplit[$userLeaderboard[$guildID;mensagens;asc;{tag} -แตแต {value}];\n]
$footer[1;Soma de mensagens enviadas: $getServerVar[allmensagens] | Vocรช: $getUserVar[mensagens]]
$thumbnail[1;$getVar[thumbrank]]
 $botTyping
`
},{
name: "catavento",
type:"awaited",
code: `$botTyping
<@$authorID>
$author[1;Membros com mais cataventos:]
$color[1;RANDOM]
$description[1;**TOP 1** - $splitText[1]
**TOP 2** - $splitText[2]
**TOP 3** - $splitText[3]
4ยบ $splitText[4]
5ยบ $splitText[5]
6ยบ $splitText[6]
7ยบ $splitText[7]
8ยบ $splitText[8]
9ยบ $splitText[9]
10ยบ $splitText[10]
$textSplit[$userLeaderboard[$guildID;cataventos;asc;{tag} -แตแต {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
`
},{
name: "premiados",
type:"awaited",
code: `$reply
<@$authorID> | โญ
$title[1;Membros que foram os mais ativos de cada mรชs]
$description[1;
$addField[1;Janeiro de 2022;Aelusi]
$addField[1;Fevereiro de 2022;Fulano#0000]
]
$thumbnail[1;$getVar[thumbrank]]
$footer[1;Quer aparecer aqui? Tente ser os 3 top membros ativos!]
`
},{
name: "miau",
type:"awaited",
code: `$reply
<@$authorID> | Miau! ๐ธ
`
}]
