module.exports = [{
name: "wasted",
aliases: ["selascou"],
desc: "Eita! Se f--. Adicione o filtro Wasted!",
category: "Edição de Imagens",
usage: "wasted @user?",
code: `
<@$authorID>
$attachment[https://some-random-api.com/canvas/overlay/wasted?avatar=$replaceText[$userAvatar[$mentioned[1]];webp;png];$username-gay.png]

$clientTyping
$cooldown[10s;Aguarde **%time%** para usar novamente]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]

`
}]