module.exports = [{
    name: "isTicket",
    params: 
    {
      name: 'channelID',
      description: "ID do canal",
      required: false
    }
   ,
   code: `$return[$getChannelVar[isTicketChannel;$if[$env[channelID]==;$channelID;$env[channelID]];false]]`
}]