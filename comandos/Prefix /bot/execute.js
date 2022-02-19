module.exports = {
name: "executar",
  aliases: ['eval'],
code: `
  $reply
  $channelSendMessage[$channelID;<@$authorID> | Executado!]
$eval[$message]
$onlyForIDs[494795833351602176;<@$authorID> | Esse comando não existe, ou você não tem permissão.]
`
}