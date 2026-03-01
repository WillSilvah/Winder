module.exports = {
	name: "unban",
    aliases: ["desbanir", "ub"],
    desc: "Desbana um membro.",
    category: "Moderação",
    usage: "unban @user/userid motivo?",
    slash: "desbanir",
    type: "messageCreate",
    code: `
    $onlyIf[$argsCount>0;$cmdinfo[$commandName]]
$onlyIf[$hasPerms[$guildID;$authorID;BanMembers]==true;<@$authorID> Você não tem permissão para $bold[banir membros] aqui! $emoji[$emojiID[pats_foxBan]]]

$startTyping[$channelID]

$let[userID;$findUser[$message[0]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[staffID;$authorID]
$let[type;desbanido]

$onlyIf[$get[userID]!=$authorID;<@$authorID> Você está se automencionando ou este usuário não existe.]

$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$!unban[$guildID;$get[userID];$get[reason]]

$sendMessage[$channelID;<@$authorID> **$username[$get[userID]]** foi **$get[type]**!
> $bold[$get[reason]]]
`
}
