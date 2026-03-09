module.exports = {
	name: "expulsar",
    aliases: ["kick", "chutar", "k"],
    desc: "Expulse um membro",
    category: "Moderação",
    usage: "kick @user/userid motivo?",
    slash: "expulsar",  
    type: "messageCreate",
    code: `
    $onlyIf[$argsCount>0;$cmdinfo[$commandName]]
$onlyIf[$hasPerms[$guildID;$authorID;KickMembers]==true;<@$authorID> Você não tem permissão para $bold[expulsar membros] aqui! $emoji[$emojiID[pats_foxBan]]]

$startTyping[$channelID]

$let[userID;$findUser[$message[0]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[staffID;$authorID]
$let[type;expulso]

$onlyIf[$get[userID]!=$authorID;<@$authorID> Você está se automencionando ou este usuário não existe.]

$if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$!kickMember[$guildID;$get[userID];$get[reason]]

$sendMessage[$channelID;<@$authorID> **$username[$get[userID]]** foi **$get[type]**!
> $bold[$get[reason]]]
`
}
