module.exports = [{
    type: "voiceStateUpdate",
    code: `
    $if[$newState[channelID]!=;
     $webhookSend[$getGuildVar[webhookEventLogger];
      $author[$userDisplayName (@$userTag);$userAvatar]
      $description[
      Entrou no canal <#$channelID>
      ]
      $color[Orange]
      ;false;$username[$clientID];$userAvatar[$clientID]]
    ]
    
    $if[$oldState[channelID]!=;
     $webhookSend[$getGuildVar[webhookEventLogger];
      $author[$userDisplayName (@$userTag);$userAvatar]
      $description[
      Entrou no canal <#$channelID>
      ]
      $color[Orange]
      ;false;$username[$clientID];$userAvatar[$clientID]]
    ]
`
}]    