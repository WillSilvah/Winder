module.exports = [{
    name: "winderKick",
    code: `
    $if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
    $punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]
    $!kickMember[$guildID;$get[userID];$get[reason]]
`
}]
