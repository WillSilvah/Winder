module.exports = [{
    type: "guildBanAdd",
    code: `
    $onlyIf[$isBot==false]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Banido;$userAvatar]
     $description[$guildBanReason[$guildID;$authorID]]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
`
}]