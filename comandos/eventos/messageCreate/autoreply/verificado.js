module.exports = [{
    type: "messageCreate",
    code: `
    $reply $disableRoleMentions
    $if[$includes[$toLowercase[$message];como;enviar;mandar;envio]|$includes[$toLowercase[$message];image;mídia;arte;anexo;vídeo]==true|true;
    $startTyping[$channelID]
    $wait[2s]
    $if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==false;
$sendMessage[$channelID;Para conseguir a permissão de enviar mídia nos canais de texto, você precisa ter o cargo <@&$getGuildVar[memberVerifiedRole]>. Você ganha com **200 mensagens** (Falta **$math[200-$getMemberVar[messageTotal]]** mensagens), lembrarei quando você ganhar o cargo.];
$sendMessage[$channelID;Você **já pode** enviar mídias nos canais.]
$sendMessage[$channelID;$sticker[1483454059447976108]]
]
]    
`
}]