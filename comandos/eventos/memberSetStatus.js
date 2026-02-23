module.exports = [{
    type: "guildMemberUpdate",
    code: `
$onlyIf[$getMemberVar[memberIsolated]==false;]
 $sendMessage[$getGlobalVar[consoleChat];
$if[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole]]==true;
$setMemberVar[memberIsStaff;true];
$setMemberVar[memberIsStaff;false]
]

$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;
$setMemberVar[memberIsVerified;true];
$setMemberVar[memberIsVerified;false]
]

$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberArtistRole]]==true;
$setMemberVar[memberIsArtist;true];
$setMemberVar[memberIsArtist;false]
]

$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberOfficialArtistRole]]==true;
$setMemberVar[memberIsOfficialArtist;true];
$setMemberVar[memberIsOfficialArtist;false]
]

]
`
}]