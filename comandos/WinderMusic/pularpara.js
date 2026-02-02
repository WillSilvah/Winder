module.exports = [{
name: "pularpara",
aliases: ["skipto", "sto"],
desc: "Pule a música atual para uma específica da fila",
category: "Música",
usage: "pularpara <número>",
code: `
<@$authorID> | Certo! Esta música foi pulada para a faixa **$findNumbers[$message[1]]**.
$skipTo[$get[pularpara]]

$onlyIf[$get[executar]==true;<@$authorID> | No $getGuildVar[eventMusicName], apenas membros da Equipe Patinhas podem executar esse comando.]
$onlyIf[$isNumber[$get[pularpara]]==true;<@$authorID> | O valor que você me deu não é um numeral.]
$argsCheck[>=1;<@$authorID> | Você precisa colocar um valor numérico.]
$onlyIf[$queueLength>0;<@$authorID> | Nenhuma música está sendo tocada agora.
> Use o comando **$getGuildVar[prefixo]play <nome e autor da música>** para escutar músicas!]
$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID> | Você precisa estar no mesmo canal de voz que eu!]
$onlyIf[$voiceID[$clientID]!=;<@$authorID> | Eu não estou em nenhum canal de voz no momento.]
$onlyIf[$voiceID[$authorID]!=;<@$authorID> | Você não está em nenhum canal de voz no momento.]

$let[pularpara;$ifAwaited[$math[$findNumbers[$message[1]]-1]<$math[$queueLength-1];$math[$findNumbers[$message[1]]-1];$math[$queueLength-1]]]
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