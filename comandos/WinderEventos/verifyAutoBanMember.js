module.exports = [{
name: "joinbanteste",
//type: "",
channel: "",
code: `
$awaitExecute[autoBan]

$let[user_id;$getObjectProperty[infoBan;userID]]
$let[motivo;$getObjectProperty[infoBan;motivo]]
$createObject[infoBan;$readFile[Recursos/autoBanimentos/$authorID.json]]
$onlyIf[$fileExists[Recursos/autoBanimentos/$authorID.json]==true;Nãota banidoKKKKKKK]
`
},{
	name: "autoBan",
	type: "awaited",
	code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[1==1;{execute:punishment-log}]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$let[staffID;$clientID]
$let[userID;$get[user_id]]
$let[reason;$get[motivo]]
$let[puniType;Banido Automaticamente]]
`
}]