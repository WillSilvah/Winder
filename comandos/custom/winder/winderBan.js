module.exports = [{
    name: "winderBan",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $!ban[$guildID;$get[userID];$get[reason];0]
`
}]
