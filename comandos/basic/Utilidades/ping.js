module.exports = {
    name: "ping",
    desc: "Quanto tempo o bot responde?",
category: "Informação",
usage: "ping",
    type: "messageCreate",
    code: `
<@$authorID> | $username[$clientID] Ping: **$pingms**`
}