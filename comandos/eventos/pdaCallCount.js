module.exports = {
    type: "clientReady",
    code: `
    $log[PDAPORCALL EXECUTADO]

$setInterval[$arrayLoad[musica;, ;$channelVoiceMemberIDs[1462603953077358791]]
$arrayForEach[musica;id;
$onlyIf[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[$guildID;$env[id]]]>1;]

$let[pda;$if[$isMuted[$guildID;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda]];$env[id]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id]];$get[pda]];$env[id]]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[$guildID;$env[id]]]]

];1s]

$setInterval[$arrayLoad[jogos;, ;$channelVoiceMemberIDs[1462615093153108001]]
$arrayForEach[jogos;id;
$onlyIf[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[$guildID;$env[id]]]>1;]

$let[pda;$if[$isMuted[$guildID;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda]];$env[id]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id]];$get[pda]];$env[id]]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[$guildID;$env[id]]]]

];1s]

$setInterval[$arrayLoad[batepapo;, ;$channelVoiceMemberIDs[1462224055884189785]]
$arrayForEach[batepapo;id;
$onlyIf[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[$guildID;$env[id]]]>1;]

$let[pda;$if[$isMuted[$guildID;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda]];$env[id]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id]];$get[pda]];$env[id]]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[$guildID;$env[id]]]]

];1s]
    
$log[PDA EXECUTADO DE NOVO]
`
}
