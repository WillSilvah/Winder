module.exports = [{
    name: "newTicket",
    params: [
    {
      name: 'name',
      description: "Nome do ticket a ser criado",
      required: true
    },
    {
      name: 'message',
      description: "Mensagem a ser enviada após a criação do canal",
      required: true
    },
    {
      name: 'categoryID',
      description: "ID da categoria que o canal vai ser criado",
      required: true
    },
    {
      name: 'ReturnID',
      description: "Retornar ID do canal?",
      required: false
    }
   ],
   code: `
$let[channelID;$createChannel[$guildID;$env[name];GuildText;Ticket_$authorID;$env[categoryID]]]

$!modifyChannelPerms[$get[channelID];$authorID;+ViewChannel;+SendMessages]

$setChannelVar[isTicketChannel;true;$get[channelID]]

$sendMessage[$get[channelID];$env[message]]

$if[$env[ReturnID]==true;$return[$get[channelID]]]
`
}]