module.exports = [{
name: "abraçar",
aliases: "hug",
desc: "Quer abraçar uma pessoa só que a distância não deixa?",
category: "roleplay/social",
usage: "hug @user",
code: `
$title[1;🫂$username abraçou $ifAwaited[$mentioned[1]==$authorID;ele mesmo, pois amor próprio é essencial;$username[$mentioned[1]]]
$image[1;$getObjectProperty[hug;link]]
$color[1;Blue]

$createObject[hug;$httpRequest[https://api.some-random-api.com/animu/hug]]
$cooldown[5s;<@$authorID> | Aguarde **%time%** para poder executar esse comando novamnente!]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

`
}]
