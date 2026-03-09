module.exports = {
    type: "messageCreate",
    code: `
$wait[2s]
$jsonLoad[rawData;$messageRawData[$channelID;$messageID]]

$onlyIf[$env[rawData;embeds;0;url]!=;]
$onlyIf[$getMemberVar[messageTotal;$authorID;$guildID;0]<=6]
$onlyIf[$includes[$env[rawData;embeds;0;url];tenor;giphy]==true;]


$let[userID;$authorID]
$let[reason;Envio de link com a idéia de divulgar algum produto, um programa malicioso ou qualquer outra intenção.]
$let[staffID;$clientID]
$let[type;banido]

$sendMessage[$channelID;w!ban <@$authorID> $get[reason]]

$if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$!ban[$guildID;$get[userID];$get[reason];7]

$sendMessage[$channelID;<@$clientID> **$username[$get[userID]]** foi **$get[type]**!
> $bold[$get[reason]]]

`
}