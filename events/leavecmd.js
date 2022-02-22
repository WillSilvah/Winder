module.exports = (bot) => {
bot.leaveCommand({
channel: "861337787192836117", 
code: `
$author[1;A gente se vê por ai! $username[$authorID]!;https://cdn.discordapp.com/emojis/945622734484942849.png?size=2048]
$description[1;Infelizmente o **$username[$authorID]** saiu da pinwheel :(]
$footer[1;Comunidade pinwheel | Id do usuário: $authorID;$serverIcon]
$color[1;RANDOM]
$thumbnail[1;$authorAvatar]

`
})
  }

