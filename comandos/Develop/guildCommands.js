module.exports = [{
name: "servidor comandos",
aliases: ['sv cmds', 'server commands'],
desc: "Usado para desenvolvedores configurar rapidamente o servidor",
category: "admin comandos",
usage: "admin comandos",
code: `
<@$authorID> | Comando em criação 
$author[1;Manual de instrução > Comandos para administração]
$description[1;
Os "comandos de administração" serve para facilitar o gerenciamento do servidor para a equipe.
A maioria dos comandos são exclusivos para os donos da comunidade, gerenciadores ou moderadores.

$addField[1;servidor add/remove artista oficial;Remove/Adiciona o cargo de artista oficial]

$addField[1;servidor set icon <anexo>;Seta a logo da servidor pelo anexo]

$addField[1;servidor set name <nome>;Seta o nome da servidor]

]
$color[1;#00eaff]
`
},{
name: "servidor add artista",
aliases: ['sv ad art'],
desc: "Adiciona o cargo Artistas",
category: "servidor",
usage: "servidor add artista @user",
code: `
<@$authorID> | O Usuário **$userTag[$mentioned[1]]** ganhou o cargo de artistas! :D

$giveRole[$guildID;$mentioned[1];$getGuildVar[memberArtistRole]]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
},{
name: "servidor remove artista",
aliases: ['sv rm art'],
desc: "Remove o cargo Artistas",
category: "servidor",
usage: "servidor remove artista @user",
code: `
<@$authorID> | O Usuário **$userTag[$mentioned[1]]** não é mais artista da comunidade! ;w;

$removeRole[$guildID;$mentioned[1];$getGuildVar[memberArtistRole]]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]
`
},{
name: "servidor add verificado",
aliases: ['sv add verify'],
desc: "Adiciona o cargo verificado",
category: "servidor",
usage: "servidor add verificar @user",
code: `
<@$authorID> | O Usuário **$userTag[$mentioned[1]]** ficou verificado! >w<

$giveRole[$guildID;$mentioned[1];$getGuildVar[memberVerifiedRole]]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
},{
name: "servidor remove verificado",
aliases: ['sv rm verify'],
desc: "Remove o cargo verificado",
category: "servidor",
usage: "servidor remove verificado @user",
code: `

<@$authorID> | O Usuário **$userTag[$mentioned[1]]** não é mais verificado! :(

$removeRole[$guildID;$mentioned[1];$getGuildVar[memberVerifiedRole]]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]
`
},{
name: "servidor add artista oficial",
aliases: ['sv ad artofc'],
desc: "Adiciona o cargo artista oficial",
category: "servidor",
usage: "servidor add artista oficial @user",
code: `
<@$authorID> | O Usuário **$userTag[$mentioned[1]]** virou o artista oficial da comunidade! >w<

$giveRole[$guildID;$mentioned[1];$getGuildVar[memberOfficialArtistRole]]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
},{
name: "servidor remove artista oficial",
aliases: ['sv rm artofc'],
desc: "Remove o cargo artista oficial",
category: "servidor",
usage: "servidor remove artista oficial @user",
code: `

<@$authorID> | O Usuário **$userTag[$mentioned[1]]** deixou de ser artista oficial da comunidade ;w;

$removeRole[$guildID;$mentioned[1];962855650239610961]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
},{
name: "servidor set icon",
aliases: ['sv set icon'],
desc: "Seleciona uma logo",
category: "servidor",
usage: "servidor set icon <anexo>",
code: `
<@$authorID> | Pronto!

$setGuildVar[guildIconDefault;false;$guildID]
$setGuildIcon[$messageAttachment;$guildID]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]
`
},{
name: "servidor set name",
aliases: ['sv set name'],
desc: "Seleciona um nome",
category: "servidor",
usage: "servidor set name <nome>",
code: `
<@$authorID> | Pronto!
$setGuildName[$message;$guildID]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
},{
name: "servidor set icon default",
aliases: ['sv set icon default'],
desc: "Volta para a logo padrão",
category: "servidor",
usage: "servidor set icon default",
code: `
<@$authorID> | Pronto!

$setGuildVar[guildIconDefault;true;$guildID]
$ifAwaited[$checkContains[$hour;06;07;08;09;10;11;12;13;14;15;16;17]==true;{execute:light_logo}]

$ifAwaited[$checkContains[$hour;18;19;20;21;22;23;00;01;02;03;04;05]==true;{execute:dark_logo}]

$timezone[America/Recife]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
},{
name: "servidor set meta",
aliases: ['sv set meta'],
desc: "Seleciona uma meta",
category: "servidor",
usage: "servidor set meta <número>",
code: `
<@$authorID> | Pronto!
$setGuildVar[membersMeta;$message;$guildID]
$onlyPerms[manageGuild;<@$authorID> | Você precisa ter a permissão **gerenciar servidor** para poder executar esse comando.]

`
}]
