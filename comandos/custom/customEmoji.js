module.exports = [{
    name: "customEmoji",
    params: [
    {
      name: 'name',
      description: "Nome do emoji",
      required: true
    }
   ],
   code: `
$return[$emoji[$emojiID[$env[name]]]]
`
}]