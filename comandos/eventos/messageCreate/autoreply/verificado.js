module.exports = [{
    type: "messageCreate",
    code: `
    $onlyIf[$argsCount<7;]
    $reply $disableRoleMentions
    $if[$includes[$toLowercase[$message];compartilhar;como;enviar;mandar;envio]|$includes[$toLowercase[$message];image;mídia;midia;arte;foto;photo;anexo;vídeo]==true|true;
    $startTyping[$channelID]
    $wait[1s]
    $if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==false;
     $sendMessage[$channelID;Para conseguir a permissão de enviar mídia nos canais de texto, você precisa ter o cargo <@&$getGuildVar[memberVerifiedRole]>. Você ganha com **200 mensagens** (Falta **$math[200-$getMemberVar[messageTotal]]** mensagens), lembrarei quando você ganhar o cargo.];
    ]
    ]    
`
}]
