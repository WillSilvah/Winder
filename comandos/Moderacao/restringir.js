module.exports = [{
	name: "restringir",
	aliases: ["restrição", "quarentena"],
	desc: "Isole o usuário para que ele não consiga ter acesso aos canais e funções da comunidade.",
	category: "Moderação",
	usage: "restringir @user/userID",
	code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$removeRoles[$guildID;$get[userID];O membro foi restringido.;1462797987041513574;1463566238310596682]
$giveRole[$guildID;$get[userID];1471695919098630244]
$forEachChannel[1;{};restringirCanais;]

$onlyIf[$get[userID]!=$authorID;<@$authorID> | Você não pode restringir a si mesmo!]
$onlyIf[$findUser[$message[1];false]!=;❌ Usuário não encontrado!]

$let[staffID;$authorID]
$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;restringido]

$onlyPerms[banmembers;❌ Você precisa da permissão de \`Banir Membros\`!]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}, {
    name: "restringirCanais",
    type: "awaited",
    code: `
$modifyChannelPerms[$channelID;1471695919098630244;-viewchannel]

$onlyIf[$channelID=!1463277652562411787;]
`
}]
