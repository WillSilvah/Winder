module.exports = {
 name: "rank cataventos",
 aliases: "ranking weathervanes",
 code: `
  $reply
  $author[1;Membros mais ativos da pinwheel:]
$color[1;RANDOM]
$description[1;**TOP 1** - $splitText[1]
**TOP 2** - $splitText[2]
**TOP 3** - $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;cataventos;asc;{tag} -឵឵ {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
  $botTyping
$cooldown[30s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]`
} 
