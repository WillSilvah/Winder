module.exports = (bot) => {
  bot.readyCommand({
      channel: "923998719765004299",
      code: `
$title[1;***bot.readyCommand "$userTag[861048815594504214]"***]
$description[1;『🔮』Bot Informações 
> **Versão: \`$getVar[versão]\`**
> **Prefixo: \`pw!\`**
> **Ping: \`$ping ms\`**
> **Total Members: \`$membersCount[861313067291115541]\`**]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[861048815594504214]]

`
   })
}