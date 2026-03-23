module.exports = [{
    name: "winderMute",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $!timeout[$guildID;$get[userID];$get[time];$get[reason]]
`
}]
