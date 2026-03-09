module.exports = [{
    name: "update",
   code: `
$setGlobalVar[version;CANARY $day.$month]
$return[]
`
}]