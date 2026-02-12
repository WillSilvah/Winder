module.exports = [{
name: "cafuné",
aliases: "pat",
desc: "Faça um carinho, espalhe amor!",
category: "roleplay/social",
usage: "cafuné @user",
code: `
$title[1;❤️ $username fez um cafuné em $ifAwaited[$mentioned[1]==$authorID;si mesmo, pois amor próprio é essencial;$username[$mentioned[1]]]
$image[1;$getObjectProperty[pat;link]]
$color[1;Blue]

$createObject[pat;$httpRequest[https://api.some-random-api.com/animu/pat]]
$cooldown[5s;<@$authorID> | Aguarde **%time%** para poder executar esse comando novamnente!]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}]
