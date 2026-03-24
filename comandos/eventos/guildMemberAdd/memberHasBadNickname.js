module.exports = [{
    type: "guildMemberAdd",
    code: `$stop
    $onlyIf[$includes[$userDisplayName / $nickname;e];]
`
}]    