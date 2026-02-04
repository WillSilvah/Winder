module.exports = [{
name: "joinbanteste",
//type: "",
channel: "",
code: `
Banido KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
Motivo: $getObjectProperty[infoBan;reason]


$createObject[infoBan;$readFile[Recursos/autoBanimentos/$authorID.json]]
$onlyIf[$fileExists[Recursos/autoBanimentos/$authorID.json]==true;Nãota banidoKKKKKKK]
`
}]
//$channelSendMessage[1463226796974543114;<@&1462915937433948351>
//> Vão dar boas vindas ao <@$authorID> ($authorID) no <#1462224055884189781>!]