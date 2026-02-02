module.exports = [{
name: "repetir",
aliases: ["loop", "repeat"],
desc: "Repita a música, a fila ou desligue o modo de repetição",
category: "Música",
usage: "repetir <musica/fila/desligar",
code: `
$ifAwaited[$checkContains[$toLowercase[$message];desligar;desliga;off;desl]==true;{execute:loopDesligar}]
$ifAwaited[$checkContains[$toLowercase[$message];fila;queue;q]==true;{execute:loopFila}]
$ifAwaited[$checkContains[$toLowercase[$message];música;musica;music;track]==true;{execute:loopMusica}]

$onlyIf[$checkContains[$toLowercase[$message];música;musica;music;fila;queue;q;desligar;desliga;off;desl]==true;<@$authorID> | O que você deseja que fique em modo de looping?
> Use **$getGuildVar[prefixo]repetir <musica/fila/desligar>** para sua escolha.]
$argsCheck[>=1;<@$authorID> | O que você deseja que fique em modo de looping?
> Use **$getGuildVar[prefixo]repetir <musica/fila/desligar>** para sua escolha.]

$onlyIf[$get[executar]==true;<@$authorID> | No $getGuildVar[eventMusicName], apenas membros da Equipe Patinhas podem executar esse comando.]
$onlyIf[$queueLength>0;<@$authorID> | Nenhuma música está sendo tocada agora.
> Use o comando **$getGuildVar[prefixo]play <nome e autor da música>** para escutar músicas!]
$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID> | Você precisa estar no mesmo canal de voz que eu!]
$onlyIf[$voiceID[$clientID]!=;<@$authorID> | Eu não estou em nenhum canal de voz no momento.]
$onlyIf[$voiceID[$authorID]!=;<@$authorID> | Você não está em nenhum canal de voz no momento.]


$let[executar;$ifAwaited[$get[eventMusic]==true;$ifAwaited[$get[staffPerm]==true;true;false];true]]
$let[staffPerm;$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole]]]
$let[eventMusic;$getGuildVar[eventMusicStatus]]

$onlyIf[$getUserVar[musicBan]==false;<@$authorID> | Você está banido de todos os comandos de música do Winder Music.]
$guildCooldown[5s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
$clientTyping
`
},{
name: "loopMusica",
type: "awaited",
code: `
<@$authorID> | Certo! A música atual entrou em modo de looping.
$loopMode[song]
`
},{
name: "loopFila",
type: "awaited",
code: `
<@$authorID> | Certo! A fila atual entrou em modo de looping.
$loopMode[queue]
`
},{
name: "loopDesligar",
type: "awaited",
code: `
<@$authorID> | Certo! O modo de looping foi desligado.
$loopMode[none]
`
}]