module.exports = [{
name: "trancar",
aliases: ['lock','travar'],
desc: "Serve para trancar um canal, evitando que outros usuários falem.",
category: "Moderação",
usage: "trancar #canal?",
code: `$reply
$modifyChannelPerms[$mentionedChannels[1];$guildID;-sendmessages]
<@$authorID> | <#$mentionedChannels[1]> foi bloqueado com sucesso!
$onlyPerms[managechannels;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]`
}]
