module.exports = [{
    name: "winderUnwarn",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $let[memberWarns;$getMemberVar[warns;$get[userID];$get[guild];1]]
    $jsonLoad[avisos;$getMemberVar[warnList;$get[userID];$get[guild];{}]]
    $!jsonDelete[avisos;$get[memberWarns]]
    $setMemberVar[warnList;$env[avisos];$get[userID];$get[guild]]
    $letSub[memberWarns;1]
    $setMemberVar[warns;$get[memberWarns];$get[userID];$get[guild]]
`
}]
