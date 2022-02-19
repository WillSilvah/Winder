module.exports = {
 name: "rank bump",
 aliases: "ranking bump",
 code: `
 $reply
  $botTyping
 $author[1;Membros que mais bumpara a pinwheel]
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
$textSplit[$userLeaderboard[$guildID;bump;asc;{tag} -឵឵ {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
$cooldown[30s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]`
} 
