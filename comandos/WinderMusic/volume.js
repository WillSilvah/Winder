module.exports = [{
name: "volume",
aliases: ["vol", "v"],
desc: "Aumente ou diminua o volume da música",
category: "Música",
usage: "volume <número>",
code: `
<@$authorID> | Certo! O volume da música foi setado para **$get[volume]%**!
$volume[$get[volume]]


$onlyIf[$message[1]<=100;<@$authorID> | O volume máximo é **100**!]
$onlyIf[$isNumber[$get[volume]]==true;<@$authorID> | O valor que você me deu não é um numeral.]
$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$onlyIf[$queueLength>0;<@$authorID> | Nenhuma música está sendo tocada agora.
> Use o comando **$getGuildVar[prefixo]play <nome e autor da música>** para escutar músicas!]
$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID> | Você precisa estar no mesmo canal de voz que eu!]
$onlyIf[$voiceID[$clientID]!=;<@$authorID> | Eu não estou em nenhum canal de voz no momento.]
$onlyIf[$voiceID[$authorID]!=;<@$authorID> | Você não está em nenhum canal de voz no momento.]

$let[volume;$ifAwaited[$findNumbers[$message[1]]<=100;$findNumbers[$message[1]];100]]

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