module.exports = [{
    name: "winderWarn",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $let[memberWarns;$getMemberVar[nextWarns;$get[userID];$get[guild];1]]
    $jsonLoad[avisos;$getMemberVar[warnList;$get[userID];$get[guild];{}]]
    $jsonLoad[warn;{
      "staffID": "$get[staffID]",
      "reason": "$get[reason]", 
      "timestamp": "$getTimestamp"
    }]
    $!jsonSet[avisos;$get[memberWarns];$env[warn]]
    $setMemberVar[warnList;$env[avisos];$get[userID];$get[guild]]
    $letSum[memberWarns;1]
    $setMemberVar[nextWarns;$get[memberWarns];$get[userID];$get[guild]]
    $setMemberVar[warnsTotal;$math[$getMemberVar[warnsTotal;$get[userID];$guildID;0]+1];$get[userID];$get[guild]]
`
}]
