module.exports = [{
	name: "punishmentlog",
	params: [
{
  name: 'userID',
  required: true
},
{
  name: 'staffID',
  required: true
},
{
  name: 'reason',
  required: true
 },
 {
  name: 'type',
  required: true
 }
],
code: `$sendMessage[$getGuildVar[punishmentLog];
$author[Equipe Patinhas: Nossa toca, tem regras.;https://cdn.discordapp.com/emojis/1466597066892640456.png?size=2048]
$title[$userTag[$env[userID]] | $env[type]]
$description[
$addField[💀 Motivo;$env[reason]]

$addField[🛡️ Punido por;<@$env[staffID]>]
]
$footer[ID do usuário: $env[userID]]
$color[Orange]
$thumbnail[$userAvatar[$env[userID]]]
$addActionRow
$addButton[discord://-/users/$get[userID];Ver perfil;Link;👀;false]
]`
}]