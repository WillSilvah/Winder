module.exports = [{
    type: "inviteCreate",
    code: `
    $onlyIf[$isBot==false]
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag): convite criado;$userAvatar]
     $description[$newInvite[url] -> <#$newInvite[channelID]>\n$discordTimestamp[$newInvite[timestamp]]]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
`
}]