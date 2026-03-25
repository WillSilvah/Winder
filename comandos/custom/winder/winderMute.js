module.exports = [{
    name: "winderMute",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];$get[time]]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];$get[time]]
    $!timeout[$guildID;$get[userID];$get[time];$get[reason]]
`
}]
