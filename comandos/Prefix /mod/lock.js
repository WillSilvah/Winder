
module.exports = {
  name: "lock",
  aliases: ['trancar','travar'],
  code: `$reply
  $modifyChannelPerms[$guildID;$channelID;-sendmessage]
<@$authorID> | <#$channelID> foi bloqueado com sucesso! Por motivos de prioridade e qualidade de serviço, somente pinwheel Ultra+ pode conversar aqui mesmo com o canal bloqueado.
$onlyPerms[managechannel;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]`
}
