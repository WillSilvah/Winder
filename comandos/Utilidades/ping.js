module.exports = [{
    name: "ping",
    type: "messageCreate",
    desc: "Quanto tempo o bot responde?",
category: "Informação",
usage: "ping",
    code: `
 $reply[$channelID;$get[msgID];false]
$sendMessage[<@$authorID> | $username[$clientID] Ping: **$pingms**]

`
}]