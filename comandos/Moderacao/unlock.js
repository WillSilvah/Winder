module.exports = [{
name: "destrancar",
aliases: ['unlock','destravar'],
desc: "Destranque um canal que está bloqueado para permitir que outros usuários falem",
category: "Moderação",
usage: "destrancar #canal?",
code: `$reply
$modifyChannelPerms[$mentionedChannels[1];$guildID;+sendmessages]
<@$authorID> | <#$mentionedChannels[1]> foi destrancado com sucesso!
$onlyPerms[managechannels;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]
`
}]
