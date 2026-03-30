module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getGlobalVar[sleepMode]==true;]
    $let[roleID;1481734062270844968]
    $timezone[America/Recife]
    $onlyIf[$hour[TwoDigit]==03]
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true]
    $onlyIf[$hasRoles[$guildID;$authorID;$get[roleID]]==false]
    $let[chance;$randomNumber[1;100]]
    $onlyIf[$get[chance]<=1]

    $!addMessageReactions[$channelID;$messageID;👻]

    $!memberAddRoles[$guildID;$authorID;$get[roleID]]
`
}]