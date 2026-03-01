module.exports = {
type: "clientReady",
code: `
$let[guildId;1462224054676099094]
$fn[monitor;
$arrayLoad[members;,;$channelVoiceMemberIDs[$env[voiceId];,]]

$loop[$arrayLength[members];
$let[id;$arrayAt[members;$math[$env[i] - 1]]]

$if[$channelVoiceMemberCount[$voiceID[$get[guildId];$get[id]]]==1;
$log[Canal "$channelName[$voiceID[$get[guildId];$get[id]]]" que o @$username[$get[id]] está não tem mais que 1 membro]
$break
]

$let[time;1]

$let[voiceTimeMonth;$getMemberVar[voiceTimeMonth;$get[id];$get[guildId];0]]

$letSum[voiceTimeMonth;$get[pda]]
$setMemberVar[voiceTimeMonth;$get[voiceTimeMonth];$get[id];$get[guildId]]

$let[voiceTimeTotal;$getMemberVar[voiceTimeTotal;$get[id];$get[guildId];0]]

$letSum[voiceTimeTotal;$get[pda]]
$setMemberVar[voiceTimeTotal;$get[voiceTimeTotal];$get[id];$get[guildId]]

$log[$username[$get[id]]: $get[time]  minuto no $channelName[$voiceID[$get[guildId];$get[id]]]]

;i;true]

;voiceId]

$setInterval[$callFn[monitor;1462603953077358791];1m]
$setInterval[$callFn[monitor;1462615093153108001];1m]
$setInterval[$callFn[monitor;1462224055884189785];1m]
`
}
