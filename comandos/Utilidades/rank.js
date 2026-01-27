module.exports = [{
name: "rank",
aliases: ["ranking"],
desc: "Veja o ranking de membros em uma categoria",
category: "Diversão",
usage: "rank <categoria>",
code:`
$reply
$author[1;Qual rank você quer ver?]
$description[1;

$addField[1;💬 $getGuildVar[prefixo]rank msgs temporada [página?];
Rank dos mensageiros da temporada **$toLowerCase[$getObjectProperty[session;name]]**
]
$addField[1;💬 $getGuildVar[prefixo]rank msgs total [página?];
Rank somado dos mensageiros de todas as outras temporadas
]
$addField[1;✨ $getGuildVar[prefixo]rank pda temporada [página?];
Os membros mais ativos da temporada **$toLowerCase[$getObjectProperty[session;name]]**
]
$addField[1;✨ $getGuildVar[prefixo]rank pda total [página?];
Rank somado dos membros mais ativos de todas as outras temporadas
]

]
$footer[1;Utilize: $getGuildVar[prefixo]rank <opção> <1/2/3...>]
$color[1;Green]

$createObject[session;$readFile[Recursos/session.json]]
`
},{
name: "rank msgs temporada",
code: `
$reply
$author[1;Fofoqueiros da temporada | Página $ifAwaited[$argsCount>=1;$message[1];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[1;$getObjectProperty[session;name];https://pt.wikihow.com/Ser-o-Melhor]
$description[1;
$globalUserLeaderBoard[messageMonth;desc;{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
]
$footer[1;Soma de mensagens enviadas: $getGuildVar[guildMonthMessages] | Você: $getGlobalUserVar[messageMonth;$authorID] ]
$image[1;$getObjectProperty[session;banner]]
$color[1;Green]
$clientTyping

$createObject[session;$readFile[Recursos/session.json]]
$cooldown[30s;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
},{
name: "rank msgs total",
code: `
$reply
$author[1;Conversadores históricos | Página $ifAwaited[$argsCount>=1;$message[1];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$description[1;
$globalUserLeaderBoard[messageTotal;desc;{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
]
$footer[1;Você enviou $getGlobalUserVar[messageTotal;$authorID] mensagens]
$color[1;Green]
$clientTyping
$cooldown[30s;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
},{
name: "rank pda total",
code: `
$reply
$author[1;ATIVOS HISTÓRICOS (total) | Página $ifAwaited[$argsCount>=1;$message[1];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$description[1;
$globalUserLeaderBoard[msgXPtotal;desc;{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
]
$footer[1;Você tem $getGlobalUserVar[msgXPtotal;$authorID] pontos de atividade]
$color[1;Green]
$clientTyping
$cooldown[30s;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
},{
name: "rank pda temporada",
code: `
$reply
$author[1;ATIVOS DO MÊS (temporada) | Página $ifAwaited[$argsCount>=1;$message[1];1];https://abs.twimg.com/emoji/v2/72x72/1f4ac.png]
$title[1;$getObjectProperty[session;name];https://pt.wikihow.com/Ser-o-Melhor]
$description[1;
$globalUserLeaderBoard[msgXP;desc;{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
]
$footer[1;Você tem $getGlobalUserVar[msgXP;$authorID] pontos de experiência]
$image[1;$getObjectProperty[session;banner]]
$color[1;Green]
$clientTyping

$createObject[session;$readFile[Recursos/session.json]]
$cooldown[30s;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
}]