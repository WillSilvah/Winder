module.exports = {
name: "$alwaysExecute",
code: `
$addCmdReactions[❤️]

$onlyIf[$checkContains[$stringEndsWith[$message;#arte] $stringEndsWith[$message;#artes];true]==true;]
$onlyIf[$if[$messageAttachment!=;]
$onlyIf[$messageAttachment!=;]
$onlyIf[$channelID==1462224055884189782;]
`
} 


