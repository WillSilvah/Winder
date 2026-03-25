module.exports = [{
    type: "voiceStateUpdate",
    code: `
    $webhookSend[$getGuildVar[webhookEventLogger];
     $author[$userDisplayName (@$userTag);$userAvatar]
     $description[
     NewState: $newState[channelID]
     OldState: $oldState[channelID]
     ]
     ;false;$username[$clientID];$userAvatar[$clientID]]
`
}]    