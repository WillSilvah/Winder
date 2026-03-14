module.exports = {
    type: "guildMemberRemove",
    code: `
    $if[$getMemberVar[memberIsolated]==true;
     $let[userID;$authorID]
    $let[reason;Saiu enquanto isolado.]
    $let[staffID;$clientID]
    $let[type;banido]

    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

    $!ban[$guildID;$get[userID];$get[reason];0]

    ]
`
}