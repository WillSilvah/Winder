module.exports = [{
    name: "isTicket",
    params: [
    {
      name: 'channelID',
      description: "ID do canal",
      required: false
    }
   ],
   code: `
$env[channelID]
`
}]