module.exports = {
  code: `
    Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
  `,
data: {
    type: 1
    name: "ping",
    description: "Quanto tempo o Winder responde?",
    integration_types: [
    0
    ]
  },
}