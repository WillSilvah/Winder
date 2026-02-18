module.exports = [{
	name: "sendDMPunishment",
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
code: `
$sendDM[$env[userID];
$title[$emoji[$emojiID[pats_foxBan]] Você foi $env[type];https://www.bing.com/search?q=O%20que%20s%C3%A3o%20regras%3F&pc=MOZB&form=MOZMBA]
$description[
$addField[💀 Motivo;$env[reason]]

$addField[🛡️ Punido por;$userTag[$env[staffID]]]
]
$thumbnail[1;$userAvatar[$env[staffID]]]
$color[Orange]
$footer[Equipe Patinhas: Nossa toca, tem regras.]

$addActionRow
$addButton[https://dyno.gg/form/8e826f68;Apelo de desbanimento;Link;<:pats_foxBan:1466597066892640456>;false]
]
`
}]