module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getMemberVar[activityLastDay];$authorID;$guildID;00/00]
`
}]