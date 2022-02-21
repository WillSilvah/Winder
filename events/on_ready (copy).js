module.exports = (bot) => {
  bot.readyCommand({
      channel: "861337787192836117",
      code: `$botTyping
$author[1;$userTag[861048815594504214] está ligado e pronto para o uso!
$description[1;
> **Versão: \`$getVar[versão]\`**
> **Prefixo: \`$getServerVar[prefixo]\`**
> **Ping: \`$pingms\`**
> **Database Ping: \`$dbPingms\`**
> **CPU: \`$cpu%\`**
> **AOI: \`$packageVersion\`**
> **NODE: \`$nodeVersion\`**
> **Membros totais: \`$membersCount[861313067291115541]\`**
> **Hospedado na SquareCloud https://squarecloud.app/**
]
$deleteIn[2m]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[861048815594504214]]
`
   })
}
