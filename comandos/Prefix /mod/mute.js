module.exports = {
name: "mute",
code: `
<@$suthorID> | <@$mentioned[1]> foi mutado com sucesso!
> Motivo: **$noMentionMessage**
$onlyPerms[kick;❌ | ***<@$authorID> Você não tem a permissão de **Expulsar Membros** para executar esse comando.***]
$giveRoles[868656559004188752;$mentioned[1]]
$onlyIf[$mentioned[1]!=;<@$authorID> | Mencione algué,m para silenciar!]
`
}
