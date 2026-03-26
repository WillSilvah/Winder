module.exports = [{
    type: "guildBanRemove",
    code: `
    $onlyIf[$isBot==false]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Desbanido;$userAvatar]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]