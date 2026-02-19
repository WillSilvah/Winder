module.exports = {
    type: "guildMemberAdd",
    code: `
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]
$sendMessage[$getGuildVar[batePapo];
$addSection[
$addTextDisplay[## BEM VINDO <@$authorID>!
$if[$isBot[$authorID]==false;Espero que goste da Patinhas e que você se divirta mais do que eu com uma bola de lã. 🐱 Se liga nas nossas diretrizes e aproveite tudo! 😉;Um novo aplicativo foi adicionado na Patinhas *ruídos de robô pode ser ouvido* Epa! Ele disse alguma coisa? 🤔
]
]
$addThumbnail[$userAvatar[$authorID]]
]
$addActionRow
$addButton[https://discord.com/channels/1462224054676099094/1462590504188383304;Conheça a Patinhas!;Link;👋;false]
]


`,
}