module.exports = [{
    type: "inviteCreate",
    code: `
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): Convite criado;$userAvatar]
     $description[$newInvite[url] -> <#$newInvite[channelID]>\n$discordTimestamp[$newInvite[timestamp]]]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]