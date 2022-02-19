module.exports = {
  name: "unlock",
  aliases: ['destrancar','destravar'],
  code: `$reply
  $modifyChannelPerms[$guildID;$channelID;+sendmessage]
<@$authorID> | <#$channelID> foi destrancado com sucesso!
$onlyPerms[managechannel;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]`
  }
