module.exports = [{
    type: "guildMemberUpdate",
    code: `
$onlyIf[$getMemberVar[memberIsolated;$authorID]==false;]
$sendMessage[$getGlobalVar[consoleChat];
$if[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole]]==true;
$setMemberVar[memberIsStaff;true;$authorID];
$setMemberVar[memberIsStaff;false;$authorID]
]

$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;
$setMemberVar[memberIsVerified;true;$authorID];
$setMemberVar[memberIsVerified;false;$authorID]
]

$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberArtistRole]]==true;
$setMemberVar[memberIsArtist;true;$authorID];
$setMemberVar[memberIsArtist;false;$authorID]
]

$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberOfficialArtistRole]]==true;
$setMemberVar[memberIsOfficialArtist;true;$authorID];
$setMemberVar[memberIsOfficialArtist;false;$authorID]
]

]
`
}]