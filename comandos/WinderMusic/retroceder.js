module.exports = [{
name: "retroceder",
aliases: ["rebobinar", "rewind"],
desc: "Rebobine a música atual ao início",
category: "Música",
usage: "retroceder",
code: `
<@$authorID> | Certo! A música atual foi iniciada novamente.
$seek[0]

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
}]