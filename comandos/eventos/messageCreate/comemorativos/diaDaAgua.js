module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getGlobalVar[sleepMode]==false;]
    $onlyIf[$getGuildVar[evento_diaDaAguaStatus;$guildID;false]==true;]
    $let[roleID;1481733329899491431]
    $timezone[America/Recife]
    $onlyIf[$day/$month[TwoDigit]==22/03;]
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==false;]
    $onlyIf[$hasRoles[$guildID;$authorID;$get[roleID]]==false;]
    $onlyIf[$randomNumber[1;100]<=3;]

    $!addMessageReactions[$channelID;$messageID;💧;💦]

    $!memberAddRoles[$guildID;$authorID;$get[roleID]]
    $setMemberVar[badge_diaDaAgua;true]
`
},{
    type: "clientReady",
    code: `
    $let[roleID;1481733329899491431]
    $cron[
    $onlyIf[$day[TwoDigit]/$month[TwoDigit]==22/03;]
    $setGuildVar[evento_diaDaAguaStatus;false;1462224054676099094]
    $arrayLoad[roleMembers;,;$roleMembers[1462224054676099094;$get[roleID];,]]
    $arrayMap[roleMembers;id;
    $return[<@$env[id]>]
    ;roleUsernames]

    $sendMessage[$getGuildVar[anunciosChat;1462224054676099094];
     $addContainer[
      $addSection[
       $addTextDisplay[### 💦 PARABÉNS A TODOS QUE TOMARAM ÁGUA HOJE!]
       $addTextDisplay[$arrayJoin[roleUsernames;\n]]
       $addTextDisplay[\n Próximo evento: 22/03/2027]
       $addThumbnail[https://i.ibb.co/JFGYZR8S/Water-Days2025.jpg]
      ]
     ;White]
    ]
    ;0 22 22 3 *;America/Recife;diaDaAgua]
`}]