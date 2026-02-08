module.exports = [{
name: "lgbtfilter",
aliases: ["lgbt", "gayfilter", "gay"],
desc: "Coloque um filtro LGBT no avatar de alguém!",
category: "Edição de Imagens",
usage: "lgbtfilter @user?",
code: `
<@$authorID>
$attachment[https://some-random-api.com/canvas/overlay/gay?avatar=$replaceText[$userAvatar[$mentioned[1]];webp;png];$username-gay.png;URL]

$clientTyping
$cooldown[10s;Aguarde **%time%** para usar novamente]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}]