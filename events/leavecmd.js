module.exports = (bot) => {
bot.leaveCommand({ 
        channel: "861337787192836117", 
  code: `
$title[1;<:pinw_yellow:929149041881788526> **A gente se vê por ai! $username[$authorID]!**]
$description[1;Infelizmente o **$username[$authorID]** saiu da pinwheel :(]
$footer[1;Comunidade pinwheel | Id do usuário: $authorID ]
$color[1;RANDOM]
$thumbnail[1;$authorAvatar]

`
})
  }

