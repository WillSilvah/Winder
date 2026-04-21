module.exports = [{
    type: "messageCreate",
    code: `
    $if[$toLowercase[$message]==$toLowercase[$getMemberVar[defensorLastMessage;$authorID;$guildID;vazio]];
     $deleteCommand
     $let[v;$getMemberVar[defensorInfractions;$authorID;$guildID;0]]
     $letSum[v:1]
     $setMemberVar[defensorInfractions;$get[v];$authorID]
     
     $if[$getMemberVar[defensorInfractions;$authorID;$guildID;0]>3;
      $let[userID;$authorID]
      $let[reason;Spam/Flood]
      $let[staffID;$authorID]
      $let[type;silenciado]
      $let[time;30m]
      $winderMute
      $sendMessage[$channelID;w!ban <@$authorID> $get[reason]] $c[Enfeite, para dizer que foi o próprio bot que executou a função]
      $sendMessage[$channelID;<@$clientID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
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