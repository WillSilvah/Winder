module.exports = [{
    type: "messageDelete" 
    code: `
    $sendMessage[$getGuildVar[eventLogChannel];
     $author[$userDisplayName (@$userTag): Mensagem deletada;$userAvatar]
     $description[$codeBlock[$message]\nCanal: <#$channelID>]
     $color[Orange]
    ]
`
}]    