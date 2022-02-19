module.exports = {
name: "botinfo",
code: `
  $reply
$author[1;Informações avançadas do pinwBot]
$description[1;
Versão do BOT: **$getVar[versão]**

> **Informação de Hardware**

ping: **$pingms**
CPU: **%CPU**
RAM: **$ram**
Uptime: **$uptime**

> **__Hospedado em Square Cloud__**

]
$thumbnail[1;$userAvatar[861048815594504214]]
`
}
