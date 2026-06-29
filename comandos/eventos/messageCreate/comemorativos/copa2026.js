module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getGlobalVar[sleepMode]==false;]
    $let[roleID;1515463857768890518]
    $timezone[America/Recife]
    $onlyIf[$day/$month[TwoDigit]==29/06]
    $onlyIf[$hour[TwoDigit]>=14;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true]
    $onlyIf[$hasRoles[$guildID;$authorID;$get[roleID]]==false]

    $!memberAddRoles[$guildID;$authorID;$get[roleID]]
`
}]