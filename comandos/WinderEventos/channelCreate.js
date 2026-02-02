module.exports = [{
name: "channelCreate",
type: "channelCreate",
channel: "",
code: `
$channelSendMessage[$newChannel[id];$randomText[Meow! :3;Miaau! :3;Meeoow! :3;Primeiro! $customEmoji[pats_justAFox];Olá! $customEmoji[pats_foxKiss]]]

$onlyIf[$isTicket[$channelID]==false;]
`
},{
name: "threadCreate",
type: "threadCreate",
channel: "",
code: `
$channelSendMessage[$newChannel[id];$randomText[Meow! :3;Miaau! :3;Meeoow! :3;Primeiro! $customEmoji[pats_justAFox];Olá! $customEmoji[pata_foxKiss]]]

$onlyIf[$isTicket[$channelID]==false;]
`
}]