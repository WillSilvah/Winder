module.exports = {
    type: "clientReady",
    code: `
$setInterval[$arrayLoad[musica;, ;$channelVoiceMemberIDs[1462603953077358791]]
$arrayForEach[musica;id;
$onlyIf[$hasRoles[1462224054676099094;$env[id];$getGuildVar[memberVerifiedRole;1462224054676099094]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[1462224054676099094;$env[id]]]>1;]

$let[pda;$if[$isMuted[1462224054676099094;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda];1462224054676099094];$env[id];1462224054676099094]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id];1462224054676099094];$get[pda]];$env[id];1462224054676099094]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[1462224054676099094;$env[id]]]]

];1m]

$setInterval[$arrayLoad[jogos;, ;$channelVoiceMemberIDs[1462615093153108001]]
$arrayForEach[jogos;id;
$onlyIf[$hasRoles[1462224054676099094;$env[id];$getGuildVar[memberVerifiedRole;1462224054676099094]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[1462224054676099094;$env[id]]]>1;]

$let[pda;$if[$isMuted[1462224054676099094;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda];1462224054676099094];$env[id];1462224054676099094]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id];1462224054676099094];$get[pda]];$env[id];1462224054676099094]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[1462224054676099094;$env[id]]]]

];1m]

$setInterval[$arrayLoad[batepapo;, ;$channelVoiceMemberIDs[1462224055884189785]]
$arrayForEach[batepapo;id;
$onlyIf[$hasRoles[1462224054676099094;$env[id];$getGuildVar[memberVerifiedRole;1462224054676099094]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[1462224054676099094;$env[id]]]>1;]

$let[pda;$if[$isMuted[1462224054676099094;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda];1462224054676099094];$env[id];1462224054676099094]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id];1462224054676099094];$get[pda]];$env[id];1462224054676099094]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[1462224054676099094;$env[id]]]]

];1m]
`
}
