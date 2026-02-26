module.exports = {
type: "clientReady",
code: `
$let[guildId;1462224054676099094]
$fn[monitor;
$arrayLoad[members;,;$channelVoiceMemberIDs[$env[voiceId];,]]

$loop[$arrayLength[members];
$let[id;$arrayAt[members;$math[$env[i] - 1]]]

$if[$hasRoles[$get[guildId];$get[id];$getGuildVar[memberVerifiedRole;$get[guildId]]]==false;
$log[@$username[$get[id]] não tem verificado]
$break
]

$if[$channelVoiceMemberCount[$voiceID[$get[guildId];$get[id]]]==1;
$log[Canal "$channelName[$voiceID[$get[guildId];$get[id]]]" que o @$username[$get[id]] está não tem mais que 1 membro]
$break
]

$let[pda;$function[
$if[$isMuted[$get[guildId];$get[id]];
$return[0]
]
$return[$randomNumber[1;3]]
]]

$let[pdaMonth;$getMemberVar[pdaMonth;$get[id];$get[guildId]]]

$letSum[pdaMonth;$get[pda]]
$setMemberVar[pdaMonth;$get[pdaMonth];$get[id];$get[guildId]]

$let[pdaTotal;$getMemberVar[pdaTotal;$get[id];$get[guildId]]]

$letSum[pdaTotal;$get[pda]]
$setMemberVar[pdaTotal;$get[pdaTotal];$get[id];$get[guildId]]

$log[$username[$get[id]]: Ganhou $get[pda] no $channelName[$voiceID[$get[guildId];$get[id]]]]

;i;true]

;voiceId]

$setInterval[$callFn[monitor;1462603953077358791];1m]
$setInterval[$callFn[monitor;1462615093153108001];1m]
$setInterval[$callFn[monitor;1462224055884189785];1m]
`
}
