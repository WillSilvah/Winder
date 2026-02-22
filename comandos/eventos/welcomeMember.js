module.exports = {
    type: "guildMemberAdd",
    code: `
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]
$sendMessage[$getGuildVar[batePapo];

$author[@$username[$authorID];https://cdn.discordapp.com/emojis/1464435933729263657.png?size=2048]
$title[$username seja bem-vindo(a)!;https://www.bing.com/search?q=Como+ser+bem+recebido+em+um+lugar&setmkt=pt-BR&PC=EMMX01&form=LWS002&scope=web&darkschemeovr=1]
$description[
$if[$isBot[$authorID]==false;Espero que goste da Patinhas e que você se divirta mais do que eu com uma bola de lã. 🐱 Se liga nas nossas diretrizes e aproveite tudo! 😉;Um novo aplicativo foi adicionado na Patinhas *ruídos de robô pode ser ouvido* Epa! Ele disse alguma coisa? 🤔
]
]
$footer[Veio pelo: @$username[$inviterID[$guildID;$authorID]] | ID: $authorID]
$thumbnail[$userAvatar]
$color[#020afc]
]

$addActionRow
$addButton[https://discord.com/channels/1462224054676099094/1462590504188383304;Conheça a Patinhas!;Link;👋;false]
]


`,
}