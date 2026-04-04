module.exports = [{
    type: "clientReady",
    code: `
    $timezone[America/Recife]
    $cron[
    $onlyIf[$day>=7;]
    $let[guildID;1462224054676099094]
    $arrayLoad[members;, ;$guildMemberIDs[$get[guildID];, ]]
    $arrayForEach[members;id;
     $if[$getMemberVar[talkingMonth;$env[id];$get[guildID]]>=7;
      $if[$hasRoles[$get[guildID];$env[id];$getGuildVar[memberActiveRole;$get[guildID]]]==false;
       $!memberAddRoles[$get[guildID];$env[id];$getGuildVar[memberActiveRole;$get[guildID]]]
       ]
     ]
     $if[$getMemberVar[oldTalkingMonth;$env[id];$get[guildID]]<7;
      $!memberRemoveRoles[$get[guildID];$env[id];$getGuildVar[memberActiveRole;$get[guildID]]]
     ]
    ]
    ;0 2 * * *;America/Recife]
    
    $cron[
     $arrayLoad[talkingMembers;, ;$guildMemberIDs[$get[guildID];, ]]
    $arrayForEach[talkingMembers;id;
     $setMemberVar[oldTalkingMonth;$getMemberVar[talkingMonth;$env[id];$get[guildID];0];$env[id];$get[guildID]]
    ]
    ;0 0 1 * *;America/Recife;ResetTalkingMonth]
    $cron[
    ;0 5 1 * *;America/Recife]
`
}]