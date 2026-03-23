module.exports = [{
    name: "winderUnmute",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $!timeout[$guildID;$get[userID];0;$get[reason]]
`
}]
