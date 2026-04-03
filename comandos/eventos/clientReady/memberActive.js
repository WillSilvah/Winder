module.exports = [{
    type: "clientReady",
    code: `
    $timezone[America/Recife]
    
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