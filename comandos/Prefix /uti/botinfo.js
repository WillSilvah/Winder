module.exports = {
name: "botinfo",
code: `$botTyping
  $reply
$author[1;Informações avançadas do pinwBot]
$description[1;
Versão do BOT: **$getVar[versão]**

> **Informação de Hardware**

Ping: **$pingms**
Database ping: **$dbPingms**
CPU: **$CPU%**
RAM: **$ram**
Uptime: **$uptime**
AOI Version: **$packageVersion**
Node Version: **$nodeVersion**

> **__Hospedado em Square Cloud__**

]
$thumbnail[1;$userAvatar[861048815594504214]]
`
}
