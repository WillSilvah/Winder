module.exports = [{
    type: "messageCreate",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole;$guildID]]==false;
    $if[$toLowercase[$message]==$toLowercase[$getMemberVar[defensorLastMessage;$authorID;$guildID;vazio]];
     $deleteCommand
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