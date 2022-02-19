module.exports = {
name: "permissõeslista",
aliases: ['permissãolista','checklist'],
code: `
  $reply
$cooldown[10s;<@$authorID> | Espere %time% para executar novamente!]
$author[1;Lista de permissões para usar em $getServerVar[prefixo]checkperms]
$description[1;
createinvite
kick
ban
admin
managechannel
manageserver
addreactions
viewauditlog
priorityspeaker
stream
viewchannel
sendmessage
sendtts
managemessages
embedlinks
attachfiles
readmessagehistory
mentioneveryone
externalemojis
viewguildinsights
connect
speak
mutemembers
deafenmembers
movemembers
usevad
changenickname
managenicknames
manageroles
managewebhooks
manageemojisandstickers
useappcmds
requesttospeak
managethreads
usepublicthreads
useprivatethreads
createpublicthreads
createprivatethreads
externalstickers
sendmessageinthreads
startembeddedactivities


]
$footer[1;$randomText[OwO;UwU;>w<;Ow<;>wO;Adoro;Amou?]]
`
}