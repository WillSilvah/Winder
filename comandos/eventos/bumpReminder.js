module.exports = {
type: "messageCreate",
allowBots: true,
code: `
$onlyIf[$authorID==302050872383242240;]
$onlyIf[$channelID==1462796515578876079;]

$jsonLoad[data;$messageRawData[$channelID;$messageID]]

$onlyIf[$checkContains[$env[data;embeds;0;description];Bump done!]]

$sendMessage[1462796515578876079;<@$env[data;interaction;user]> Obrigado por ajudar!]

$advancedTimeout[$esc[
$sendMessage[1462796515578876079;<@&1462953076091785370>
$title[🎉 Hora de dar /bump!]
$description[
Hey! Tá na hora de dar boost na Disboard!
Usa o comando </bump:947088344167366698>
]
$color[Green]
]
];2h;BumpReminder;]

`
}