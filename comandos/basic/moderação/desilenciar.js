module.exports = {
	name: "desilenciar",
    aliases: ["unmute", "descalar", "um"],
    desc: "Desilencie um membro",
    category: "Moderação",
    usage: "desilenciar @user/userid motivo?",
    slash: "desilenciar",
    type: "messageCreate",
    code: `
    $onlyIf[$argsCount>0;$cmdinfo[$commandName]]
$onlyIf[$hasPerms[$guildID;$authorID;MuteMembers]==true;<@$authorID> Você não tem permissão para $bold[banir membros] aqui! $emoji[$emojiID[pats_foxBan]]]

$startTyping[$channelID]

$let[userID;$findUser[$message[0]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[staffID;$authorID]
$let[type;desilenciado]

$onlyIf[$get[userID]!=$authorID;<@$authorID> Você está se automencionando ou este usuário não existe.]

$if[$memberExists[$guildID;$env[userID]]==true;$sendDMPunishment[$get[userID];$get[staffID];$get[reason];$get[type];]]
$punishmentlog[$get[userID];$get[staffID];$get[reason];$get[type];]

$!timeout[$guildID;$get[userID];0;$get[reason]]

$sendMessage[$channelID;<@$authorID> **$username[$get[userID]]** foi **$get[type]**!
> $bold[$get[reason]]]
`
}
