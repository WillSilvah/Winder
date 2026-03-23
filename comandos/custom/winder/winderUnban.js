module.exports = [{
    name: "winderUnban",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $!unban[$guildID;$get[userID];$get[reason]]
`
}]
