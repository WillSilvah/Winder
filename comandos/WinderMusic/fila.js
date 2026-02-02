module.exports = [{
name: "fila",
aliases: ["queue", "q"],
desc: "Veja a fila da lista de músicas atual",
category: "Música",
usage: "fila página?",
code: `<@$authorID>
$author[1;Lista de músicas;$readFile[Recursos/musiclogo.txt]]
$title[1;▶️ $songInfo[title]$ifAwaited[$songInfo[identifier]==spotify; - $songInfo[artist]];$songInfo[url]]
$description[1;
$replaceText[$queue[$get[pagina];$get[limit];{position}. **[{title}]({url})**
];,;]
$ifAwaited[$getGuildVar[eventMusicStatus;861313067291115541]==true;**ACONTECENDO AGORA:**
## $toUpperCase[$getGuildVar[eventMusicName]]]
]
$footer[$get[musicas] $ifAwaited[$get[musicas]<=1;música;músicas] na fila! | Tocando por $humanizeMs[$getGuildVar[musicTimeCount]]]
$color[1;Blue]
$addButton[1;$channelName[$voiceID[$clientID]];link;https://discord.com/channels/861313067291115541/$voiceID[$clientID];false;<<:wmusic:1211026667162697829>]

$let[limit;$if[$channelID==1169085605993529374;10;5]]
$reply

$let[pagina;$ifAwaited[$argsCount>=1;$ifAwaited[$isNumber[$message[1]]==true;$message[1];1];1]]
$let[musicas;$ifAwaited[$queueLength==1;Nenhuma;$math[$queueLength-1]]]

$onlyIf[$getUserVar[musicBan]==false;<@$authorID> | Você está banido de todos os comandos de música do Winder Music.]
$guildCooldown[10s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$onlyIf[$queueLength>0;<@$authorID> | Nenhuma música está sendo tocada agora.
> Use o comando **$getGuildVar[prefixo]play <nome e autor da música>** para escutar músicas!]
$onlyIf[$voiceID[$clientID]!=;<@$authorID> | Eu não estou em nenhum canal de voz no momento.]
$clientTyping
`
}]