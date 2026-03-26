module.exports = [{
    type: "messageUpdate",
    code: `
    $onlyIf[$isBot==false]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Mensagem editada;$userAvatar]
     $description[Antes: $codeBlock[$oldMessage[content]]\nAgora: $codeBlock[$newMessage[content]]\nCanal: <#$channelID>]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]