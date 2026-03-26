module.exports = [{
    type: "guildBanRemove",
    code: `
    $onlyIf[$isBot==false]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): desbanido;$userAvatar]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
`
}]