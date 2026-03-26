module.exports = [{
    type: "voiceStateUpdate",
    code: `
    $onlyIf[$isBot==false]
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
      Saiu do canal <#$oldState[channelID]>
      ]
      $color[Orange]
      ;false;$username[$clientID];$userAvatar[$clientID]]
    ]
`
}]    