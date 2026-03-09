module.exports = [{
    name: "closeTicket",
    params: 
    {
      name: 'error',
      description: "Mensagem de erro",
      required: false
    },
    code: `
$if[$getChannelVar[isTicketChannel;$channelID]==true;
$deleteChannels[$channelID];
$return[$env[error]]]
`
}]