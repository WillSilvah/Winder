module.exports = {
name: "modolento",
aliases: ["slowmode"],
desc: "Ative o modo lento em um canal",
category: "Moderação",
usage: "modolento <tempo> #canal?",
code: `
$slowmode[$message[1];$mentionedChannels[1]]

<@$authorID> | <#$mentionedChannels[1]> está com **$message[1]** de modolento!

$onlyPerms[managechannels;<@$authorID> | Você precisa ter a permissão de **gerenciar canais** para executar este comando!]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]`
}
