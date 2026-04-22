module.exports = [{
    type: "presenceUpdate",
    code: `
    $setUserVar[lastOnTimestamp;$getTimestamp]
`
},{
    type: "typingStart",
    code: `
    $setUserVar[lastOnTimestamp;$getTimestamp]
`
}]