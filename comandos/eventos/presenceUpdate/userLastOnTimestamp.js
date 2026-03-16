module.exports = [{
    type: "presenceUpdate",
    code: `
    $setUserVar[lastOnTimestamp;$getTimestamp]
`
}]