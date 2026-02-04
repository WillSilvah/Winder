module.exports = [{
name: "winder ban",
aliases: ["winder banir", "wb", "winder exilar"],
desc: "Bane automaticamente um usuário permanentemente",
category: "Moderação",
usage: "ban @user/userID motivo?",
code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$writeFile[Recursos/autoBanimentos/$get[userID].json;
{
    "usename": "$username[$get[userID]]",
    "motivo": "$get[reason]",
    "userID": "$get[ID]"
};utf8]



$onlyIf[$checkContains[$;
$onlyIf[$message[1]!=$authorID;<@$authorID> | Você está colocando seu próprio ID.]


$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$let[staffID;$authorID]
$let[userID;$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;Banido Automáticamente]
$clientTyping
`
}]