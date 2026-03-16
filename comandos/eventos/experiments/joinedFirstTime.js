module.exports = [{
    type: "guildMemberUpdate",
    code: `
    $if[$getMemberVar[memberJoinedFirstTime;$authorID]!=;
     $setMemberVar[memberJoinedFirstTime;$memberJoinedAt[$guildID;$authorID];$authorID;$guildID]
    ]
`
},{
    type: "guildMemberAdd",
    code: `
    $if[$getMemberVar[memberJoinedFirstTime;$authorID]!=;
     $setMemberVar[memberJoinedFirstTime;$memberJoinedAt[$guildID;$authorID];$authorID;$guildID]
    ]
`
},{
    type: "presenceUpdate",
    code: `
    $if[$getMemberVar[memberJoinedFirstTime;$authorID]!=;
     $setMemberVar[memberJoinedFirstTime;$memberJoinedAt[$guildID;$authorID];$authorID;$guildID]
    ]
`
},{
    type: "messageCreate",
    code: `
    $if[$getMemberVar[memberJoinedFirstTime;$authorID]!=;
     $setMemberVar[memberJoinedFirstTime;$memberJoinedAt[$guildID;$authorID];$authorID;$guildID]
    ]
`
}]