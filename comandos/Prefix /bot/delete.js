module.exports = {
name: "$alwaysExecute",
code: `$checkContains[$message;&]
$deleteCommand
$wait[30s]
`
}
