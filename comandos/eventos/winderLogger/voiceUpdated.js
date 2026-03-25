module.exports = [{
    type: "voiceStateUpdate",
    code: `
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag);$userAvatar]
     $description[
     $if[$oldState[channelID]!=;Entrou no canal <#$newState[$channelID]>;Saiu do canal <#$oldState[channelID]>]
     ]
     $color[Orange]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]    