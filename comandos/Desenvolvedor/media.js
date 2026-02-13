module.exports = [{
name: "media atividade",
desc: "Veja a média de PDA!",
category: "Desenvolvedor",
usage: "eval",
code: `
$sendMessage[<@$authorID> | Temporada: **$get[temppda]** (PDA)
<@$authorID> | Temporada: **$get[tempmsgsmedia]** (Mensagens)
]


$let[tempmsgsmedia;$truncate[$math[$get[tempsomamsgs]/$membersCount[$guildID;all;false]]]]

$let[tempsomamsgs;$math[$replaceText[$replaceText[$userLeaderBoard[$guildID;messageMonth;desc;{value},;$membersCount[$guildID;all;false];1;main];,;+];+
;+]0]]


$let[temppda;$truncate[$math[$get[temppdasoma]/$membersCount[$guildID;all;false]]]]

$let[temppdasoma;$math[$replaceText[$replaceText[$userLeaderBoard[$guildID;msgXP;desc;{value},;$membersCount[$guildID;all;false];1;main];,;+];+
;+]0]]
`
}]
