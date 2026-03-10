module.exports = {
  code: `
$addContainer[
$addSection[
$addTextDisplay[## $toUpperCase[$guildName]
-# **🐾 $separateNumber[$guildMemberCount[1462224054676099094;;false];.] | 🟢 $separateNumber[$guildMemberCount[1462224054676099094;online;false];.] | 🚀 $guildBoostCount[$guildID]**
]
$addSeparator[Large;true]

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
