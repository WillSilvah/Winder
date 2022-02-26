
module.exports = {
  name: "lock",
  aliases: ['trancar','travar'],
  code: `$reply
  $modifyChannelPerms[$guildID;$channelID;-sendmessage]
<@$authorID> | <#$channelID> foi bloqueado com sucesso!
$onlyPerms[managechannel;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]`
}
