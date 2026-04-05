module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getGlobalVar[sleepMode]==false;]
    $onlyIf[$getGuildVar[evento_pascoaStatus;$guildID;false]==true]
    $let[roleID;1490333236637864196]
    $timezone[America/Recife]
    $onlyIf[$day/$month[TwoDigit]==5/04]
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true]
    $onlyIf[$hasRoles[$guildID;$authorID;$get[roleID]]==false]
    $let[chance;$randomNumber[1;100]]
    $onlyIf[$get[chance]<=20]

    $!addMessageReactions[$channelID;$messageID;$randomText[🐰;🍬;🍫]]

    $!memberAddRoles[$guildID;$authorID;$get[roleID]]
`
},{
    type: "clientReady",
    code: `
    $let[roleID;1490333236637864196]
    $cron[
    $timezone[America/Recife]
    $let[roleID;1481733329899491431]
    $onlyIf[$day[TwoDigit]/$month[TwoDigit]==05/04;]
    $setGuildVar[evento_pascoaStatus;false;1462224054676099094]
    $arrayLoad[roleMembers;,;$roleMembers[1462224054676099094;$get[roleID];,]]
    $arrayMap[roleMembers;id;
    $return[<@$env[id]>]
    ;roleUsernames]

    $sendMessage[$getGuildVar[anunciosChat;1462224054676099094];
     $addContainer[
      $addSection[
       $addTextDisplay[### 🍫 FELIZ PÁSCOA!\nMembros que ganharam o cargo especial:]
       $addTextDisplay[$arrayJoin[roleUsernames;\n]]
       $addTextDisplay[\n Próximo evento: 05/04/2027]
      ]
     ;#005DBA]
    ]
    $setGuildVar[evento_pascoaStatus;false;1462224054676099094]
    $!setGuildIcon[1462224054676099094;$getGuildVar[logo_sleep;1462224054676099094];Hora de dormir]
    $setGuildVar[guildColor;#ddf3fe;1462224054676099094]
    $setGuildVar[guildIconDefault;true;1462224054676099094]
    ;7 22 22 3 *;America/Recife;pascoa]
`}]