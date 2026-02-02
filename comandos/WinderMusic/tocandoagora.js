module.exports = [{
name: "tocandoagora",
aliases: ["tocando agora", "now playing", "nowplaying", "np"],
desc: "Veja informações da música tocando agora",
category: "Música",
usage: "tocandoagora",
code: `
<@$authorID>
$author[1;Tocando agora;$readFile[Recursos/musiclogo.txt]]
$title[1;$songInfo[title]$ifAwaited[$songInfo[identifier]==spotify; - $songInfo[artist]];$songInfo[url]]
$description[1;
⏳ **Duração:** $humanizeMs[$songInfo[duration]]
👥 **Pedido por:** $songInfo[requester]
$ifAwaited[$getGuildVar[eventMusicStatus;861313067291115541]==true;**ACONTECENDO AGORA:**
## $toUpperCase[$getGuildVar[eventMusicName]]
]
$footer[$get[musicas] $ifAwaited[$get[musicas]<=1;música;músicas] na fila | Tocando por $humanizeMs[$getGuildVar[musicTimeCount]]]
$image[$songInfo[thumbnail]]
$color[1;$dyColor[blue;light]]
$addButton[1;$channelName[$voiceID[$clientID]];link;https://discord.com/channels/861313067291115541/$voiceID[$clientID];false;<:wmusic:1211026667162697829>]

$let[musicas;$ifAwaited[$queueLength==1;Nenhuma;$math[$queueLength-1]]]
$onlyIf[$queueLength>0;<@$authorID> | Nenhuma música está sendo tocada agora.
> Use o comando **$getGuildVar[prefixo]play <nome e autor da música>** para escutar músicas!]

$onlyIf[$getUserVar[musicBan]==false;<@$authorID> | Você está banido de todos os comandos de música do Winder Music.]
$guildCooldown[5s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
$clientTyping
`
}]