module.exports = {
name: "sos",
aliases: ['emergencia','emergência', 'socorro', 'chamarstaff'],
code: `
<@&894592054175342602>
$author[1;$username[$authorID]#$discriminator[$authorID] está clamando por ajuda!]
$description[1;Motivo: $message
$argsCheck[>1;<@$authorID> | Qual o motivo do seu pedido de socorro? **$getServerVar[prefixo]$randomText[sos;emergência;socorro;chamarstaff] <mensagem>**]
$thumbnail[1;$userAvatar[$authorID]]
$serverCooldown[30m;<@$authorID> | A staff já foi chamada, aguarde **%time%** para chamar novamente.]
`
}
