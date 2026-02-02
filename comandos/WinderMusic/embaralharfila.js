module.exports = [{
name: "embaralharfila",
aliases: ["shuffle", "shufflequeue", "sq", "embaralhar"],
desc: "Embaralhe a fila de músicas atual",
category: "Música",
usage: "embaralharfila",
code: `
<@$authorID> | Certo! A fila de músicas atual foi embaralhada.
$shuffleQueue

$onlyIf[$queueLength>0;<@$authorID> | Nenhuma música está sendo tocada agora.
> Use o comando **$getGuildVar[prefixo]play <nome e autor da música>** para escutar músicas!]
$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID> | Você precisa estar no mesmo canal de voz que eu!]
$onlyIf[$voiceID[$clientID]!=;<@$authorID> | Eu não estou em nenhum canal de voz no momento.]
$onlyIf[$voiceID[$authorID]!=;<@$authorID> | Você não está em nenhum canal de voz no momento.]
$onlyIf[$get[executar]==true;<@$authorID> | No $getGuildVar[eventMusicName], apenas membros da Equipe Patinhas podem executar esse comando.]

$let[executar;$ifAwaited[$get[eventMusic]==true;$ifAwaited[$get[staffPerm]==true;true;false];true]]
$let[staffPerm;$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole]]]
$let[eventMusic;$getGuildVar[eventMusicStatus]]

$onlyIf[$getUserVar[musicBan]==false;<@$authorID> | Você está banido de todos os comandos de música do Winder Music.]
$guildCooldown[5s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
$clientTyping
`
}]