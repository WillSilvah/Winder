module.exports = [{
    type: "guildMemberUpdate",
    code: `
    $if[$oldMember[addedRoles]==$getGuildVar[memberVerifiedRole;$guildID];
     $if[$isUserDMEnabled==true;
      $sendDM[$authorID;
       $addContainer[
        $addTextDisplay[## AGORA VOCÊ É UM PELUDO VERIFICADO!\n**Concluiu a missão de enviar $getGuildVar[memberVerifiedQuantity;$guildID;0] mensagens na comunidade**]
         $addTextDisplay[Você está liberado a ter acesso a funcionalidades que são bloqueadas por padrão, como: Possibilidade de enviar mídia nos canais de texto, reagir, participar de sorteios, ganhar pontos de atividade, participar de eventos, e muito mais.]
         $addTextDisplay[Espero que goste da Patinhas!]
        $addActionRow
         $addButton[ticket;Abrir ticket;Primary;📩;false]
         $addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;⬆️;false]
         $addButton[https://discord.com/channels/1462224054676099094/1462224055884189781;Ir ao Bate Papo;Link;💬;false]
       ;Green]
      ]
    ]
    ]
`
}]    