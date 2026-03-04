module.exports = {
type: "clientReady",
code: `
$let[guildId;1462224054676099094]
$fn[monitor;
$arrayLoad[members;,;$channelVoiceMemberIDs[$env[voiceId];,]]

$loop[$arrayLength[members];
$let[id;$arrayAt[members;$math[$env[i] - 1]]]
$onlyIf[$isBot[$get[id]]==false;]

$if[$channelVoiceMemberCount[$voiceID[$get[guildId];$get[id]]]==1;
$log[Canal "$channelName[$voiceID[$get[guildId];$get[id]]]" que o @$username[$get[id]] está não tem mais que 1 membro]
$break
]

$let[time;1]

$setMemberVar[timecallMonth;$math[$getMemberVar[timecallMonth;$get[id];$get[guildId];0]+$get[time]];$get[id];$get[guildId]]

$setMemberVar[timecallTotal;$math[$getMemberVar[timecallTotal;$get[id];$get[guildId];0]+$get[time]];$get[id];$get[guildId]]

$log[$username[$get[id]]: $get[time]  minuto no $channelName[$voiceID[$get[guildId];$get[id]]]]

;i;true]

;voiceId]

$setInterval[$callFn[monitor;1462603953077358791];1m]
$setInterval[$callFn[monitor;1462615093153108001];1m]
$setInterval[$callFn[monitor;1462224055884189785];1m]
`
}
