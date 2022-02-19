module.exports = (bot) => {
bot.joinCommand({ 
        channel: "861337787192836117", 
  code: `
<@$authorID>
$title[1;<:pinw_yellow:929149041881788526> Seja Bem Vindo $username[$authorID] ]
$description[1;Seja bem vindo a comunidade pinwheel <@$authorID> ! Espero que goste daqui e que faça  otimos amigos!

**Respeite as diretrizes!**
Leia o canal <#861333504297926677> para saber o que pode ou não pode!

**Registre-se e se colore-se**
Visite o canal <#861829639444889620> e pegue cargos!]
$color[1;RANDOM]
$footer[1;Comunidade pinwheel | ID do usuário: $authorID]
$thumbnail[1;$authorAvatar]
`
})
                }