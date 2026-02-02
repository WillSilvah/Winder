module.exports = [{
type: "trackStart",
channel: "$getVar[consoleChat]",
code: `
$log[[MUSIC] $userTag[$findUser[$songInfo[requester]]] ganhou $get[pda] PDA]
$setUserVar[msgXP;$sum[$getUserVar[msgXP;$findUser[$songInfo[requester]];$guildID];$get[pda]];$authorID;$guildID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$findUser[$songInfo[requester]];$guildID];$get[pda]];$authorID;$guildID]

$let[pda;$random[1;15]]

$channelSendMessage[$getGuildVar[musicLog;$guildID];{newEmbed:
{author:Histórico:$readFile[Recursos/musiclogo.txt]}
{title:$songInfo[title]}
{url:$songInfo[url]}
{description:
⌛ Duração: **$humanizeMs[$songInfo[duration]]**
😸 Pedido por: $songInfo[requester]
}
{image:$songInfo[thumbnail]}
{color:Blue}
}]

$channelSendMessage[$getGuildVar[musicLog;$guildID];{newEmbed:
{author:Tocando agora:$readFile[Recursos/musiclogo.txt]}
{title:$songInfo[title]}
{url:$songInfo[url]}
{footer:Pedido por $userTag[$findUser[$songInfo[requester]]]}
{color:Blue}
{thumbnail:$userAvatar[$findUser[$songInfo[requester]]]}
}]

$onlyIf[$loopStatus==none;]

$setVar[totalMusicTimeCount;$sum[$getVar[totalMusicTimeCount];$songInfo[duration]]]
$setVar[totalMusicCount;$sum[$getVar[totalMusicCount];1]]


$setGuildVar[musicTimeCount;$sum[$getGuildVar[musicTimeCount];$songInfo[duration]]]
$setGuildVar[musicCount;$sum[$getGuildVar[musicCount];1]]
$setStatus[$songInfo[title]$ifAwaited[$songInfo[identifier]==spotify; - $songInfo[artist]];Listening;online]

$setUserNickname[$clientID;$username[$clientID] Music]
$ifAwaited[$usersInChannel[$voiceID[$clientID];id;,]==$clientID;
{execute:leave-alone}]
$ifAwaited[$checkContains[$songInfo[title];estourad;rojao;rojao;fod;gemi;zap;risad;fude;bolson;lula;cavalo]==true;{execute:skipForce}]
$ifAwaited[$songInfo[duration]>=$ifAwaited[$getGuildVar[eventMusicStatus;$guildID]==true;300000;600000];{execute:skipForce}]

$let[requester;$findUser[$songInfo[requester]]]
$let[title;$songInfo[title]]
$let[url;$songInfo[url]]

$useChannel[$getGuildVar[musicLog;$guildID]]
`
}]