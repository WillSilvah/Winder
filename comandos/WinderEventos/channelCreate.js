module.exports = [{
name: "channelCreate",
type: "channelCreate",
channel: "",
code: `
$channelSendMessage[$newChannel[id];$randomText[Meow! :3;Miaau! :3;Meeoow! :3;Primeiro! $customEmoji[justAFox];Olá! $customEmoji[foxKisses]]]

$onlyIf[$isTicket[$channelID]==false;]
`
},{
name: "threadCreate",
type: "threadCreate",
channel: "",
code: `
$channelSendMessage[$newChannel[id];$randomText[Meow! :3;Miaau! :3;Meeoow! :3;Primeiro! $customEmoji[justAFox];Olá! $customEmoji[foxKisses]]]

$onlyIf[$isTicket[$channelID]==false;]
`
}]