module.exports = [{
    type: "guildBanRemove",
    code: `
    $onlyIf[$authorID!=]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Desbanido;$userAvatar]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]