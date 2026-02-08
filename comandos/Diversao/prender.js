module.exports = [{
name: "prender",
aliases: ["jail"],
desc: "Coloque alguém na prisão!",
category: "Edição de Imagens",
usage: "prender @user?",
code: `
<@$authorID>
$attachment[https://api.some-random-api.com/canvas/overlay/jail?avatar=$replaceText[$userAvatar[$mentioned[1]];webp;png];$username-gay.png]

$clientTyping
$cooldown[10s;Aguarde **%time%** para usar novamente]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

`
}]