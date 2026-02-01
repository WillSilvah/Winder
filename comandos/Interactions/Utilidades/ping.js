module.exports = [{
name: "ping",
type: "interaction",
prototype: "slash",
code: `
$interactionReply[$username[$clientID] Interactions ping: **$interactionPingms**]
  `
}]