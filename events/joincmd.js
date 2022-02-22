module.exports = (bot) => {
bot.joinCommand({ 
channel: "861337787192836117",
code: `
<@$authorID>
$author[1;Seja Bem Vindo $username[$authorID];https://cdn.discordapp.com/emojis/945622734484942849.png?size=2048]
$description[1;Seja bem vindo a comunidade pinwheel <@$authorID> ! Espero que goste daqui e que faça  otimos amigos!

$addField[1;<:pwh_gato_policial:930060461288861796> | Respeite as diretrizes!;Leia o canal <#861333504297926677> para saber o que pode ou não pode!]

$addField[1;<:pwh_cat_flower:863784382543560724> | Registre-se e se colore-se;Visite o canal <#861829639444889620> e pegue cargos!]
$addField[1;<:pinw_rosa:945621147733590046> | Ajude a pinwheel ser cada vez melhor!;Vote na pinwheel usando vt!vote | Dê sua opinião sobre ela indo em https://dyno.gg/form/316a9c99]

]
$color[1;RANDOM]
$footer[1;Comunidade pinwheel | ID do usuário: $authorID;$serverIcon]
$thumbnail[1;$authorAvatar]
`
})
}
