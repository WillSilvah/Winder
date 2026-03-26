module.exports = [{
    type: "messageDelete",
    code: `
    $onlyIf[$isBot==false]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Mensagem deletada;$userAvatar]
     $description[$codeBlock[$message]\nCanal: <#$channelID>]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]