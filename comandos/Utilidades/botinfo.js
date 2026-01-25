module.exports = [{
name: "botinfo",
desc: "Veja informações avançadas (ou simples) do bot",
category: "Utilidades",
usage: "botinfo",
code: `
$ifAwaited[$hasPlayer==true;{execute:botinfo-2}]

$ifAwaited[$hasPlayer==false;{execute:botinfo-1}]

`
},{
name: "botinfo-1",
type: "awaited",
code: `
$author[1;$username[$clientID] > Informação;$userAvatar[$clientID]]
$description[1;
$replaceText[$exec[uname -a];squarecloud.app;Pinwheel OS]

$addField[1;🖥️ Versão do Node.JS;**$nodeVersion**]

$addField[1;🕊️ Versão do AOi.js;**$packageVersion**]

$addField[1;$customEmoji[wmusic] Winder Music;**tocou $getVar[totalMusicCount] músicas por $humanizeMs[$getVar[totalMusicTimeCount]]**]

$addField[1;🛜 $username[$clientID] ping;**$pingms**]

$addField[1;⭐ Versão do $username[$clientID];**$getVar[versão]**]

]
$color[1;$dyColor[blue;light]]

`
},{
name: "botinfo-2",
type: "awaited",
code: `
$author[1;$username[$clientID] > Informação;$userAvatar[$clientID]]
$description[1;
## [$songInfo[title]]($songInfo[url])
<#$voiceID[$clientID]>

$replaceText[$exec[uname -a];squarecloud.app;Pinwheel OS]

$addField[1;🖥️ Versão do Node.JS;**$nodeVersion**]

$addField[1;🕊️ Versão do AOi.js;**$packageVersion**]

$addField[1;$customEmoji[wmusic] Winder Music;**tocou $getVar[totalMusicCount] músicas por $humanizeMs[$getVar[totalMusicTimeCount]]**]

$addField[1;🛜 $username[$clientID] Ping;**$pingms**]

$addField[1;🛜 $username[$clientID] VoicePing;**$voicePingms**]

$addField[1;⭐ Versão do $username[$clientID];**$getVar[versão]**]

]
$color[1;$dyColor[blue;light]]

`
}]