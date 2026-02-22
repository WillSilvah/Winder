module.exports = {
	name: "ban",
    aliases: ["banir", "exilar", "b"],
    desc: "Bana um membro permanentemente.",
    category: "Moderação",
    usage: "ban @user/userid motivo?",    
    type: "messageCreate",
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;BanMembers]==true;<@$authorID> Você não tem permissão para $bold[banir membros] aqui! $emoji[$emojiID[pats_foxBan]]]

$let[userID;$findUser[$message[0]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[staffID;$authorID]
$let[type;banido]

$onlyIf[$get[userID]!=$authorID;<@$authorID> Você está se automencionando ou este usuário não existe.]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type]]

$sendMessage[$channelID;<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]
`
}