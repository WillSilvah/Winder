module.exports = {
  code: `
$addContainer[
$addSection[
$addTextDisplay[## $guildName]

$addThumbnail[$guildIcon]
]
;$getGuildVar[color;$guildID;Red]]

  `,
data: {
  "type": 1,
  "description": "Veja informações sobre o servidor!",
  "name": "info"
},
}
