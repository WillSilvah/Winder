module.exports = {
	name: "silenciar",
    aliases: ["mute", "calar", "m"],
    desc: "Silencie um membro",
    category: "Moderação",
    usage: "ban @user/userid tempo motivo?",
    slash: "silenciar",
    type: "messageCreate",
    code: `
    $onlyIf[$argsCount>2;$cmdinfo[$commandName]]
$onlyIf[$hasPerms[$guildID;$authorID;MuteMembers]==true;<@$authorID> Você não tem permissão para $bold[banir membros] aqui! $emoji[$emojiID[pats_foxBan]]]

$let[userID;$findUser[$message[0]]]
$let[reason;$if[$messageSlice[2]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[2]]]
$let[staffID;$authorID]
$let[time;$message[1]]
$let[type;silenciado]

$onlyIf[$get[userID]!=$authorID;<@$authorID> Você está se automencionando ou este usuário não existe.]

$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$!timeout[$guildID;$get[userID];$get[time];$get[reason]]

$sendMessage[$channelID;<@$authorID> **$username[$get[userID]]** foi **$get[type]**!]
`
}