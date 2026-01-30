module.exports = {
name: "$alwaysExecute",
code: `
$addCmdReactions[❤️]

$onlyIf[$if[$messageAttachment!=;true;false];$checkContains[$stringEndsWith[$message;#artes] | $stringEndsWith[$message;#art];true]==true;true;]
$onlyIf[$messageAttachment!=;]
$onlyIf[$channelID==1462224055884189782;]
`
} 

