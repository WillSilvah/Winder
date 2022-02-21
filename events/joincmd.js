module.exports = (bot) => {
bot.joinCommand({ 
        channel: "861337787192836117", 
  code: `
<@$authorID>
$title[1;<:pinw_yellow:929149041881788526> Seja Bem Vindo $username[$authorID] ]
$description[1;Seja bem vindo a comunidade pinwheel <@$authorID> ! Espero que goste daqui e que faça  otimos amigos!

$addField[1;Respeite as diretrizes!;Leia o canal <#861333504297926677> para saber o que pode ou não pode!]

$addField[1;Registre-se e se colore-se;Visite o canal <#861829639444889620> e pegue cargos!]
$addField[1;Ajude a pinwheel ser cada vez melhor!;Vote na pinwheel usando vt!vote | Dê sua opinião sobre ela indo em https://dyno.gg/form/316a9c99]

]
$color[1;RANDOM]
$footer[1;Comunidade pinwheel | ID do usuário: $authorID]
$thumbnail[1;$authorAvatar]
`
})
                }
