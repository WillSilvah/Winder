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
     ;#005DBA]
    ]
    ;0 22 22 3 *;America/Recife;diaDaAgua]
    
    $cron[
     $sendMessage[$getGuildVar[anunciosChat;1462224054676099094];
     $addContainer[
      $addSection[
      $addTextDisplay[## FELIZ DIA DA ÁGUA]
      $addTextDisplay[Hoje é dia de hidratar de comemorar que a água existe para nós poder viver! 💧]
      $addThumbnail[https://i.ibb.co/JFGYZR8S/Water-Days2025.jpg]
      ]
      $addTextDisplay[### GANHE UMA BADGE ESPECIAL SÓ HOJE!]
      $addTextDisplay[Converse no chat e tenha a chance de ganhar uma água o cargo <@&1462224054676099094> pra você!]
      $addTextDisplay[Tem minigame especial rolando, você pode ganhar todos?]
      $addTextDisplay[@everyone <@&1463139182313738412> <@&1463138741441790014>]
     ;#005DBA]
     
     $!setGuildIcon[1462224054676099094;https://i.ibb.co/JFGYZR8S/Water-Days2025.jpg;Dia da água]
     $setGuildVar[guildIconDefault;false;1462224054676099094]
     $setGuildVar[guildColor;#005DBA;1462224054676099094]
    ]
    ;0 7 * 22 3;America/Recife]
`}]