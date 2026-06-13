module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getGlobalVar[sleepMode]==false;]
    $onlyIf[$getGuildVar[evento_cobaBRAStatus;$guildID;false]==true]
    $let[roleID;1515463857768890518]
    $timezone[America/Recife]
    $onlyIf[$day/$month[TwoDigit]==13/06]
    $onlyIf[$hour[TwoDigit]>=19;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true]
    $onlyIf[$hasRoles[$guildID;$authorID;$get[roleID]]==false]
    $let[chance;$randomNumber[1;100]]
    $onlyIf[$get[chance]<=25]

    $!addMessageReactions[$channelID;$messageID;⚽️]

    $!memberAddRoles[$guildID;$authorID;$get[roleID]]
`
}]