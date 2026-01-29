module.exports = [{
name: "joinCommand",
type: "join",
channel: "1462224055884189781",
code: `

<@$authorID> 
$author[1;@$username[$authorID];https://cdn.discordapp.com/emojis/1464435933729263657.png?size=2048]
$title[$username seja bem-vindo(a)!;https://www.bing.com/search?q=Como+ser+bem+recebido+em+um+lugar&setmkt=pt-BR&PC=EMMX01&form=LWS002&scope=web&darkschemeovr=1]
$description[
$ifAwaited[$isBot[$authorID]==false;Espero que goste da Patinhas e que você se divirta mais do que eu com uma bola de lã. 🐱 Se liga nas nossas diretrizes e aproveite tudo! 😉;Um novo aplicativo foi adicionado na Patinhas *ruídos de robô pode ser ouvido* Epa! Ele disse alguma coisa? 🤔
] 
$footer[1;ID: $authorID]
$thumbnail[1;$userAvatar]
$color[1;#020afc]

$addButton[1; Conheça a Patinhas!;link;https://discord.com/channels/1462224054676099094/1462590504188383304;false;👋]

$onlyIf[$guildID==1462224054676099094;]
$cacheMembers[$guildID;false]

`
},{
name: "metaAdvances",
type: "join",
channel: "1462224055884189781",
code: `
$setGuildVar[membersMeta;$math[$getGuildVar[membersMeta]+100];$guildID]

$channelSendMessage[$getGuildVar[batePapo];## FINALMENTE BATEMOS $getGuildVar[membersMeta] PELUDOS NA PATINHAS! <:pats_vickyWow:1465088587338088631>

Eu, o Alexsander, a Fruta e toda a <@&$getGuildVar[allStaffRole]> agradecem a todos os peludinhos que ajudaram a bater essa meta incrivelmente significante para nós.
Iai? Vamos tentar bater a meta de $math[$getGuildVar[membersMeta]+100]? Vamos juntos transformar esse lugar incrível! 🤩

Em breve virá novidades, fiquem de olho!
]
$wait[5s]
$clientTyping

$onlyIf[$membersCount[$guildID;all;false]==$getGuildVar[membersMeta];]
`
}]

//$channelSendMessage[1463226796974543114;<@&1462915937433948351>
//> Vão dar boas vindas ao <@$authorID> ($authorID) no <#1462224055884189781>!]