
module.exports = [{
name: "ship",
aliases: ["cupido", "shipar"],
desc: "Shipe 2 membros e vejam se há possibilidade de um relacionamento!",
category: "Interação",
usage: "ship @user @user?",
code: `
$ifAwaited[$fileExists[Recursos/shippers/$mentioned[1;true]_$mentioned[2;true].json]==true;
{execute:ship-exists};
{execute:ship-not-exists}
]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

`
},{
name: "ship-not-exists",
type: "awaited",
code: `
$setTimeout[delete-ship;7d;{
"userID1": "$mentioned[1;true]",
"userID2": "$mentioned[2;true]"
};false;false]

$ifAwaited[$fileExists[Recursos/shippers/$mentioned[1;true]_$mentioned[2;true].json]==true;
{execute:ship-exists};Nossa, o amor deu falha hoje, não foi possível calcular o amor de vocês dois...]

$wait[1s]

$writeFile[Recursos/shippers/$mentioned[2;true]_$mentioned[1;true].json;
{
"lover1": "$get[love1]",
"lover2": "$get[love2]"
};utf8]

$writeFile[Recursos/shippers/$mentioned[1;true]_$mentioned[2;true].json;
{
"lover1": "$get[love1]",
"lover2": "$get[love2]"
};utf8]

$reply
$clientTyping

$let[love1;$random[0;50;false;true]]
$let[love2;$random[0;50;false;true]]

`
},{
name: "ship-exists",
type: "awaited",
code: `
$title[1;❤️ O amor está no ar!;$ifAwaited[$get[love]>=50;https://www.bing.com/search?q=como+conquistar+um+amor&qs=UT&pq=como+conquistar+um+amor&sc=9-23&cvid=EA8244077B3B464696679FCBD7055D23&FORM=QBRE&sp=1&ghc=1&lq=0;https://www.bing.com/search?q=como+reconquistar+o+amor&PC=U316&FORM=CHROMN]]
$description[1;
### $username[$mentioned[1;true]] + $username[$mentioned[2;true]]
# **$get[love]%**
]
$footer[1;$ifAwaited[$get[love]>=50;$randomText[Eu shipo vai, são tão fofos :3;Deveriam namorar a sério! 😸;Que fofinhoooss!;Namorem, se casem e sejam felizes para sempre;Uma linda história de amor está sendo construída!;Dá uma chance vai!];$randomText[Eita que o caso é complicado...;Vish...;Fica a sua escolha seguir ou não por este caminho...;Quem sabe se  dá certo ou não? Estes valores são fictícios sabe?;Eu aconselheria esperar o amor esquentar mais.;Por via das dúvidas, é melhor seguir seu coração]]]
$image[1;https://cdn.discordapp.com/attachments/785632865709981756/1183948418025017475/IMG_20231211_224507.png?ex=658a30e3&is=6577bbe3&hm=db1fcde781c37bef772e3f4c3e532eb8abcfb7a8573ab24a625de8446d476ff8&]
$color[1;Red]

$let[love;$sum[$getObjectProperty[loveling;lover1];$getObjectProperty[loveling;lover2]]]

$createObject[loveling;$readFile[Recursos/shippers/$mentioned[1;true]_$mentioned[2;true].json]]
$clientTyping
$reply
`
},{
name: "delete-ship",
type: "timeout",
code: `
$channelSendMessage[1182881476405112903;Shipper "$timeoutData[userID1]_$timeoutData[userID2]" atualizado!]
$log[Shipper "$timeoutData[userID1]_$timeoutData[userID2]" atualizado!]
$deleteFile[Recursos/shippers/$timeoutData[userID2]_$timeoutData[userID1].json]
$deleteFile[Recursos/shippers/$timeoutData[userID1]_$timeoutData[userID2].json]

`
}]