module.exports = [{
    type: 'clientReady',
    code: `
$setInterval[
$arrayLoad[teste;, ;$channelVoiceMemberIDs[1462603953077358791]]
$arrayForEach[teste;id;
$onlyIf[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[$guildID;$env[id]]]>1;]

$let[pda;$if[$isMuted[$guildID;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda]];$env[id]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id]];$get[pda]];$env[id]]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[$guildID;$env[id]]]]

];30s;PDA_musica]

$setInterval[
$arrayLoad[teste;, ;$channelVoiceMemberIDs[1462615093153108001]]
$arrayForEach[teste;id;
$onlyIf[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[$guildID;$env[id]]]>1;]

$let[pda;$if[$isMuted[$guildID;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda]];$env[id]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id]];$get[pda]];$env[id]]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[$guildID;$env[id]]]]

];30s;PDA_jogos]

$setInterval[
$arrayLoad[teste;, ;$channelVoiceMemberIDs[1462224055884189785]]
$arrayForEach[teste;id;
$onlyIf[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole]]==true;$log[$username[$env[id]] não tem verificado]]
$onlyIf[$channelVoiceMemberCount[$voiceID[$guildID;$env[id]]]>1;]

$let[pda;$if[$isMuted[$guildID;$env[id]]==true;0;$randomNumber[1;5]]]

$setMemberVar[pdaMonth;$sum[$getMemberVar[pdaMonth;$env[id]];$get[pda]];$env[id]]
$setMemberVar[pdaTotal;$sum[$getMemberVar[pdaTotal;$env[id]];$get[pda]];$env[id]]

$log[$username[$env[id]]: Ganhou $get[pda] no $channelName[$voiceID[$guildID;$env[id]]]]

];30s;PDA_batePapo]
    
    
`
}]