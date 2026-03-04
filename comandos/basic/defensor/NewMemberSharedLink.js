module.exports = {
    type: "messageCreate",
    code: `
$wait[2s]
$jsonLoad[rawData;$messageRawData[$channelID;$messageID]]

$onlyIf[$env[rawData;embeds;0;url]!=;]

$sendMessage[1472742861526142996;
$env[rawData;embeds;0;url]

]
`
}