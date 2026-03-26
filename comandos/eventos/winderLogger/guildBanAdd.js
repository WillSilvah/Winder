module.exports = [{
    type: "guildBanAdd",
    code: `
    $onlyIf[$authorID!=]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Banido;$userAvatar]
     $description[$guildBanReason[$guildID;$authorID]]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]