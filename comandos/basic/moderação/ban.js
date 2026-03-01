module.exports = {
	name: "ban",
    aliases: ["banir", "exilar", "b"],
    desc: "Bana um membro permanentemente.",
    category: "Moderação",
    usage: "ban @user/userid motivo?",
    slash: "banir",
    type: "messageCreate",
    code: `
    $onlyIf[$argsCount>0;$cmdinfo[$commandName]]
$onlyIf[$hasPerms[$guildID;$authorID;BanMembers]==true;<@$authorID> Você não tem permissão para $bold[banir membros] aqui! $emoji[$emojiID[pats_foxBan]]]

$startTyping[$channelID]

$let[userID;$findUser[$message[0]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[staffID;$authorID]
$let[type;banido]

$onlyIf[$get[userID]!=$authorID;<@$authorID> Você está se automencionando ou este usuário não existe.]

$if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$!ban[$guildID;$get[userID];$get[reason];0]

$sendMessage[$channelID;<@$authorID> **$username[$get[userID]]** foi **$get[type]**!
> $bold[$get[reason]]]
`
}
