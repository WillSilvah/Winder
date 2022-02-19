module.exports = {
 name: "rank adoros",
 aliases: "ranking adoros",
 code: `$author[1;Membros mais adorados da pinwheel]
$color[1;RANDOM]
$description[1;:heart: - $splitText[1]
2º $splitText[2]
3º $splitText[3]
4º $splitText[4]
5º $splitText[5]
6º $splitText[6]
7º $splitText[7]
8º $splitText[8]
9º $splitText[9]
10º $splitText[10]
$textSplit[$userLeaderboard[$guildID;rep;asc;{tag} -឵឵ {value}];\n]
$thumbnail[1;$getVar[thumbrank]]
$cooldown[30s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]
`
} 
