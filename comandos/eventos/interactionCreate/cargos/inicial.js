module.exports = [{
    name: "update-inicial",
    type: "messageCreate",
    code: `
    $!deleteMessage[1470875996356874292;$getGlobalVar[inicial_messageID]]
    $let[msgID;$sendMessage[1470875996356874292;
    $disableAllMentions
    $addContainer[
     $addSection[
      $addTextDisplay[## GERENCIAR CARGOS!]
      $addTextDisplay[Tem muitos cargos interessantes na Patinhas para poder pegar!]
      $addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f514.png]
     ]
    $addSeparator[Large;true]
    $addActionRow
     $addButton[bnotificar;Receber notificações;Success;🔔;false]
     $addButton[bclubes;Participar de um clube;Primary;👥;false]
     $addButton[bclubgaming;Participar de um clube de jogos;Danger;👋;false]
     $addButton[bchamadas;Receber chamadas;Primary;👋;false]
     $addButton[bcores;Trocar a do meu nome;Primary;🎨;false]
    ;Red]
    ;true]]
    $setGlobalVar[inicial_messageID;$get[msgID]]
`
}]