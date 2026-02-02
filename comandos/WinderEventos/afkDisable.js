module.exports = [{
name: "$alwaysExecute",
code: `
$deleteIn[10s]
<@$authorID> | Olá, que bom que você voltou! ❤️

$log[$scWriteFile[Recursos/afkSystem/$authorID/status.txt;false]]
$log[$scWriteFile[Recursos/afkSystem/$authorID/reason.txt;]

$onlyIf[$readFile[Recursos/afkSystem/$authorID/status.txt]==true;]

$onlyIf[$fileExists[Recursos/afkSystem/$authorID]==true;]
`
}]