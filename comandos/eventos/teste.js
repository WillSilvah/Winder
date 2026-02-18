module.exports = {
    type: "messageCreate",
    allowBots: true,
    code: `
    $onlyIf[$authorID!=$clientID;]
$sendMessage[853619792215801876;
$username: $message

]    
    
    
`
}