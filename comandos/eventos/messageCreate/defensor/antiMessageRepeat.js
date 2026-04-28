module.exports = [{
  type: "messageCreate",
  code: `
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole;$guildID]]==false]
    $if[$toLowercase[$message]==$toLowercase[$getMemberVar[defensorLastMessage;$authorID;$guildID;vazio]];
      $deleteCommand
      $let[v;$getMemberVar[defensorInfractions;$authorID;$guildID;0]]
      $letSum[v;1]
      $setMemberVar[defensorInfractions;$get[v];$authorID]
      
      $if[$getMemberVar[defensorInfractions;$authorID;$guildID;0]>3;
        $let[userID;$authorID]
        $let[staffID;$clientID] 

        $if[$getMemberVar[messageTotal;$authorID;$guildID;0]>=$getGuildVar[memberVerifiedQuantity];
          $let[reason;Spam/Flood]
          
          $if[$memberJoinedAt[$guildID;$authorID]>$math[$getTimestamp-$parseString[15d]];
            $let[type;silenciado]
            $let[time;30m]
            $winderMute
            $sendMessage[$channelID;w!silenciar <@$authorID> $get[reason]] 
            $sendMessage[$channelID;<@$clientID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
          ;
            $let[type;advertido]
            $winderWarn
            $autopunish
            $sendMessage[$channelID;w!advertir <@$authorID> $get[reason]] 
            $sendMessage[$channelID;<@$clientID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
          ]
        ;
          $let[reason;Spam/Flood automatizado]
          $let[type;banido]
          $sendMessage[$channelID;w!ban <@$authorID> $get[reason]]
          $winderBan
          $sendMessage[$channelID;<@$clientID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
        ]
      ]
    ]
    $setMemberVar[defensorLastMessage;$message;$authorID]
  `
},{
  type: "clientReady",
  code: `
    $setInterval[
      $deleteRecords[defensorInfractions]
    ;1m1s;defensorAntiRepeat]
  `
}]