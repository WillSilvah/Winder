module.exports = [{
name: "renomearcanal",
aliases: ["renamechannel"],
desc: "Simplesmente renomeie um canal",
category: "Gerenciamento",
usage: "renomearcanal #canal novoNome",
code: `
Pronto! <#$mentionedChannels[1;true]> renomeado com sucesso!
$djsEval[message.guild.channels.cache.get("$mentionedChannels[1;true]").setName("$replaceText[$noMentionMessage;|;│]")]

$reply
$onlyPerms[managechannels;<@$authorID> Você precisa ter a permissão de **Gerenciar canais**!]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}]