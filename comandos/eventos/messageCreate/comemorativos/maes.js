module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$getGlobalVar[sleepMode]==false;]
    $onlyIf[$getGuildVar[evento_diaDasMaesStatus;$guildID;false]==true]
    $let[roleID;1503017802351513771]
    $timezone[America/Recife]
    $onlyIf[$day/$month[TwoDigit]==10/05]
    $onlyIf[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true]
    $onlyIf[$hasRoles[$guildID;$authorID;$get[roleID]]==false]
    $onlyIf[$includes[$toLowercase[$message];feliz;felizes]|$includes[$toLowercase[$message];dia;dias]|$includes[$toLowercase[$message];das;da]|$includes[$toLowercase[$message];mães;mãe;mae;mainha]==true|true|true|true]

    $!addMessageReactions[$channelID;$messageID;🩷]

    $!memberAddRoles[$guildID;$authorID;$get[roleID]]
`
},{
    type: "clientReady",
    code: `
    $let[roleID;1503017802351513771]
    $cron[
    $timezone[America/Recife]
    $let[roleID;1503017802351513771]
    $onlyIf[$day[TwoDigit]/$month[TwoDigit]==22/03;]
    $setGuildVar[evento_diaDasMaesStatus;false;1462224054676099094]
    $arrayLoad[roleMembers;,;$roleMembers[1462224054676099094;$get[roleID];,]]
    $arrayMap[roleMembers;id;
    $return[<@$env[id]>]
    ;roleUsernames]

    $sendMessage[$getGuildVar[anunciosChat;1462224054676099094];
     $addContainer[
      $addSection[
       $addTextDisplay[### 🩷 FELIZ DIA DAS MÃES\nTodos os membros que deram feliz dia das mães hoje:]
       $addTextDisplay[$arrayJoin[roleUsernames;\n]]
       $addTextDisplay[\n Próximo evento: Domingo de maio de 2027]
      ]
     ;#005DBA]
    ]
    $setGuildVar[evento_diaDasMaesStatus;false;1462224054676099094]
    $!setGuildIcon[1462224054676099094;$getGuildVar[logo_sleep;1462224054676099094];Hora de dormir]
    $setGuildVar[guildColor;#ddf3fe;1462224054676099094]
    $setGuildVar[guildIconDefault;true;1462224054676099094]
    ;7 22 22 3 *;America/Recife;diaDasMaes]
`}]