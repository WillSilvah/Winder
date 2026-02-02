module.exports = [{
name: "tocar",
aliases: ["play", "p"],
desc: "Toque ou adicione uma música na fila!",
category: "Música",
usage: "tocar <nome da música/url/Winder>",
$if: "old",
code: `
$if[$checkContains[$toLowerCase[$message];winder]==false]
<@$authorID>
$author[1;Música adicionada;$readFile[Recursos/musiclogo.txt]]
$title[1;$songInfo[title;$math[$queueLength-1]];$songInfo[url;$math[$queueLength-1]]]
$description[1;
$ifAwaited[$getGuildVar[eventMusicStatus;$guildID]==true;**ACONTECENDO AGORA:**## $toUpperCase[$getGuildVar[eventMusicName]]]
]
$footer[$get[musicas] $ifAwaited[$get[musicas]<=1;música;músicas] na fila!]
$color[1;Blue]

$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID> | Você precisa estar no mesmo canal de voz que eu!]
$let[musicas;$ifAwaited[$queueLength==1;Nenhuma;$math[$queueLength-1]]]
$wait[1s]
$playTrack[$nonEscape[$message audio];youtube]

$onlyIf[$ifAwaited[$voiceID[$clientID]!=;$ifAwaited[$voiceID[$clientID]!=$voiceID[$authorID];$ifAwaited[$get[pessoas]<1;true;false]]]!=false;<@$authorID> | Alguém está ouvindo músicas em outro canal de voz. Entre no canal de voz ou use este comando mais tarde.]

$let[pessoas;$math[$getTextSplitLength-1]]
$textSplit[$usersInChannel[$voiceID[$clientID];id];, ]
$clientTyping
$reply
$elseIf[$checkContains[$toLowerCase[$message];winder]==true]
$shuffleQueue
$wait[2s]
<@$authorID>
$author[1;Playlist adicionada;$readFile[Recursos/musiclogo.txt]]
$title[1;WINDER WINDVANE PLAYLIST;$get[link_filtrado]]
$description[1;
Eu gosto muito de ouvir lo-fi, então resolvi compartilhar-los para o público! Espero que goste 💙

$footer[$get[musicas] $ifAwaited[$get[musicas]<=1;música;músicas] na fila!]
$image[1;$songInfo[thumbnail;$math[$queueLength-1]]]
$color[1;Blue]

$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID> | Você precisa estar no mesmo canal de voz que eu!]

$let[musicas;$ifAwaited[$queueLength==1;Nenhuma;$math[$queueLength-1]]]

$wait[1s]
$playTrack[$nonEscape[$get[link_filtrado]];youtube]

$onlyIf[$isValidLink[$get[link_filtrado]]==true;<@$authorID> | Esse não é um link válido.]
$let[link_filtrado;$replaceText[$replaceText[$replaceText[$splitText[1];youtube.com;youtu.be];/shorts;];music.;]]
$textSplit[$get[link];?si=]
$let[link;$replaceText[$replaceText[$replaceText[https://youtube.com/playlist?list=PLTHSb3inv7qN34m76-9_Ex9_yi4-Z1Yzk&si=nMJ0cwB2Rc58-P5K;&si=;?si=];watch?v=;];www.;]]

$onlyIf[$getGuildVar[nightMusic;$guildID]==false;<@$authorID> | A minha playlist como as outras não podem ser adicionadas enquanto o **$toUpperCase[$getGuildVar[eventMusicName]]** está acontecendo.]
$reply
$clientTyping 
$endelseif
$endif

$onlyIf[$ifAwaited[$voiceID[$clientID]!=;$ifAwaited[$voiceID[$clientID]!=$voiceID[$authorID];$ifAwaited[$get[pessoas]<1;true;false]]]!=false;<@$authorID> | Alguém está ouvindo músicas em outro canal de voz. Entre no canal de voz ou use este comando mais tarde.]

$let[pessoas;$math[$getTextSplitLength-1]]
$textSplit[$usersInChannel[$voiceID[$clientID];id];, ] 
$onlyIf[$checkContains[$toLowercase[$message];youtube.com;youtu.be;http://;https://;www.;ww1.]==false;]
$ifAwaited[$checkContains[$toLowercase[$message];youtube.com;youtu.be;http://;https://;www.;ww1.;.com]==true;{execute:musicalinkyt}]
$ifAwaited[$checkContains[$toLowercase[$message];spotify.com;open.spotify.com]==true;{execute:musicalinkspotify}]
$ifAwaited[$voiceID[$clientID]==;{execute:entrarcall}]
$onlyIf[$voiceID[$authorID]!=;<@$authorID> | Você não está em um canal de voz. Entre e use o comando novamente!]

$onlyIf[$getUserVar[musicBan]==false;<@$authorID> | Você está banido de todos os comandos de música do Winder Music.]
$cooldown[$ifAwaited[$getGuildVar[eventMusicStatus;$guildID]==false;30s;3m];<@$authorID> | **Calma, relaxe e sinta a música!** Espere **%time%** para adicionar outra música. 😉💙]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.{error}] 
`
},{
name: "musicalinkyt",
type: "awaited",
code: `
<@$authorID>
$author[1;$ifAwaited[$checkContains[$toLowercase[$message];playlist]==true;Playlist;Música] adicionada;$readFile[Recursos/musiclogo.txt]]
$title[1;$songInfo[title;$math[$queueLength-1]];$songInfo[url;$math[$queueLength-1]]]
$description[1;
$ifAwaited[$getGuildVar[nightMusic;$guildID]==true;**ACONTECENDO AGORA:**## $toUpperCase[$getGuildVar[eventMusicName]]]]
$footer[1;$get[musicas] $ifAwaited[$get[musicas]<=1;música;músicas] na fila!]
$image[1;$songInfo[thumbnail;$math[$queueLength-1]]]
$color[1;Blue]

$let[musicas;$ifAwaited[$queueLength==1;Nenhuma;$math[$queueLength-1]]]

$wait[1s]
$playTrack[$nonEscape[$get[link_filtrado]];youtube]

$onlyIf[$ifAwaited[$getGuildVar[nightMusic]==true;$ifAwaited[$checkContains[$toLowercase[$message];playlist]==true;true;false];false]==false;<@$authorID> | Você não pode inserir playlists no $toUpperCase[$getGuildVar[eventMusicName]].]
$onlyIf[$isValidLink[$get[link_filtrado]]==true;<@$authorID> | Esse não é um link válido.]
$let[link_filtrado;$replaceText[$replaceText[$replaceText[$splitText[1];youtube.com;youtu.be];/shorts;];music.;]]
$textSplit[$get[link];?si=]
$let[link;$replaceText[$replaceText[$replaceText[$message;&si=;?si=];watch?v=;];www.;]]

$clientTyping
$reply
`
},{
name: "musicalinkspotify",
type: "awaited",
code: `
$author[1;$ifAwaited[$checkContains[$toLowercase[$message];playlist]==true;Playlist;Música] adicionada;$readFile[Recursos/musiclogo.txt]]
$title[1;$songInfo[title;$math[$queueLength-1]] - $songInfo[artist;$math[$queueLength-1]];$songInfo[url;$math[$queueLength-1]]]
$description[1;
$ifAwaited[$getGuildVar[nightMusic;$guildID]==true;**ACONTECENDO AGORA:**## $toUpperCase[$getGuildVar[eventMusicName]]]
]
$footer[1;$get[musicas] $ifAwaited[$get[musicas]<=1;música;músicas] na fila!]
$color[1;Blue]
$let[musicas;$ifAwaited[$queueLength==1;Nenhuma;$math[$queueLength-1]]]

$wait[1s]
$playTrack[$nonEscape[$get[link_filtrado]];spotify]

$onlyIf[$isValidLink[$get[link_filtrado]]==true;<@$authorID> | Esse não é um link válido.]
$let[link_filtrado;$splitText[1]]
$textSplit[$get[link];?si=]
$let[link;$replaceText[$replaceText[$message;intl-pt/;];&si=;?si=]]

$clientTyping
$reply
`
},{
name: "entrarcall",
type: "awaited",
code: `
$volume[100]

$onlyIf[$volume[get]<100;]

$joinVC
`
}]