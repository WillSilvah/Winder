module.exports = [{
    name: "ticket",
    type: "interactionCreate",
    code: `$ephemeral
$timezone[America/Recife]
$onlyIf[$channelExists[$findChannel[ticket-$userTag]]==false;$interactionReply[Já existe um ticket criado por você! <#$findChannel[ticket-$userTag]>]]

$let[id;$newTicket[ticket-$userTag;$addContainer[
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
;$getGuildVar[ticketCategory];true]]

$ephemeral
$interactionReply[## TICKET CRIADO!
<#$get[id]>]

$mkdir[Recursos/ticket-logs]
$mkdir[Recursos/ticket-logs/$guildID/]
$writeFile[Recursos/ticket-logs/$guildID/ticket-$userTag.txt;$hour:$minute:$second $userTag[$clientID]: $userTag[$authorID] criou um ticket!
ID do canal: $get[id]
Data: $hour:$minute:$second - $day/$month/$year;utf8]
    
`
},{
    type: "messageCreate",
    code: `
$onlyIf[$isTicket==true;]
$timezone[America/Recife]

$appendFile[Recursos/ticket-logs/$guildID/$channelName[$channelID].txt;
$hour:$minute:$second $userTag ($authorID): $message

Attachments: $messageAttachments[$channelID;$messageID;
]
MSGID: $messageID
;utf8]


   
`}]