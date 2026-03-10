module.exports = [{
    type: "interactionCreate",
    code: `
$sendMessage[$channelID;
$commandName

$message
]
    
`
}]