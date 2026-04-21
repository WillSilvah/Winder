module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole;$guildID]]==false]
    $onlyIf[$toLowercase[$message]==$toLowercase[$getMemberVar[defensorLastMessage;$authorID;$guildID;vazio]]]
     $deleteCommand
     $let[v;$getMemberVar[defensorInfractions;$authorID;$guildID;0]]
     $letSum[v;1]
     $setMemberVar[defensorInfractions;$get[v];$authorID]
     
     $if[$getMemberVar[defensorInfractions;$authorID;$guildID;0]>3;
      
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