module.exports = [{
  type: "messageCreate",
  allowBots: true,
  code: `
  $c[Permite que apenas o bot DISBOARD execute o comando]
   $onlyIf[$authorID==302050872383242240;]
  $c[Permite que funcione APENAS no canal #bump da Patinhas] 
   $onlyIf[$channelID==1462796515578876079;]
  $c[Carrega os dados de todas as mensagens que o Disboard envia e se conter "bump done" executa o resto do comando]
   $jsonLoad[data;$messageRawData[$channelID;$messageID]]
   $onlyIf[$checkContains[$env[data;embeds;0;description];Bump done!]]
  $sendMessage[1462796515578876079;<@$env[data;interaction;user]> Obrigado por ajudar!\nAvisarei quando bater $discordTimestamp[$math[$getTimestamp+$parseString[2h]];LongTime]]
  
 $c[Seta um tempo de duas horas para o lembrete de bump funcionar e adiciona um botão para o usuário ganhar um cargo de lembrete]
  $!advancedTimeout[$esc[
   $sendMessage[{channelID};
    $addContainer[
     $addTextDisplay[<@&1462953076091785370>\n### TÁ NA HORA DE BUMPAR!\nUse o comando </bump:947088344167366698> do Disboard!]
     $addActionRow
     $addButton[bumpReminderRole;Receber notificações de bump;Success;🔔;false]
    ;#e6adad]
  ]
 ];2h;BumpReminder;{"channelID": "$channelID"}]

`
},{
    name: "bumpReminderRole",
    type: "interactionCreate",
    code: `$ephemeral $disableAllMentions
    $let[roleID;1462953076091785370]
    $if[$hasRoles[$guildID;$authorID;$get[roleID]]==false;
     $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você vai receber lembretes de bump a cada duas horas!]
     $!memberAddRoles[$guildID;$authorID;$get[roleID]]
    ;
    $interactionReply[Pronto! $customEmoji[pats_foxThumbsUp] Você não vai mais receber lembretes de bump.]
     $!memberRemoveRoles[$guildID;$authorID;$get[roleID]]
    ]
`
}]
