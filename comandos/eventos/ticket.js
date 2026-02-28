module.exports = [{
    name: "ticket",
    type: "interactionCreate",
    code: `$ephemeral
$timezone[America/Recife]
$onlyIf[$channelExists[$findChannel[💁│ticket-$userTag]]==false;Já existe um ticket criado por você! <#$findChannel[💁│ticket-$userTag]>]

$let[id;$newTicket[💁│ticket-$userTag;$addContainer[
$addSection[
$addTextDisplay[## BEM VINDO AO SUPORTE <@$authorID>!]
$addTextDisplay[Chamei os <@&$getGuildVar[allStaffRole;$guildID]> para lhe ajudar!]
$addThumbnail[$userAvatar]
]
$addSeparator[Large;true]
$addTextDisplay[### COMANDOS PARA GERENCIAR O SEU TICKET!

- **/ticket adicionar @user/ID/user**
Adicione um usuário ao seu ticket.
- **/ticket remover @user/ID/user**
Remove um usuário ao seu ticket.
- **/ticket fechar**
Fecha este ticket.

]
;Orange]
;781665473589805076;false]]

$writeFile[Recursos/ticket-logs/⭐│ticket-$userTag.txt;[$hour:$minute:$second] $userTag[$clientID]: $userTag[$authorID] criou um ticket!
ID do canal: $get[id]
Data: $hour:$minute:$second - $date/$month/$year
;utf8]
    
`
},{
    type: "messageCreate",
    code: `
$onlyIf[$isTicket[$channelID]==true;]
$onlyIf[$fileExists[Recursos/ticket-logs/$channelName[$channelID].txt]==true;]
$timezone[America/Recife]
    
$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;
[$hour:$minute:$second] $userTag ($authorID): $message

MSGID: $messageID;utf8]


   
`}]