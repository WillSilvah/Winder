module.exports = [{
	name: "restringir",
	aliases: ["restrição", "quarentena", "isolar"],
	desc: "Isole o usuário para que ele não consiga ter acesso aos canais e funções da comunidade.",
	category: "Moderação",
	usage: "restringir @user/userID",
	code: `
$ifAwaited[$getUserVar[memberIsVerified;$findUser[$get[userID]];$guildID]==true;
{execute:restricted-verified}
]

$ifAwaited[$getUserVar[memberIsStaff;$findUser[$get[userID]];$guildID]==true;
{execute:restricted-staff}
]]

$ifAwaited[$getUserVar[memberIsOfficialArtist;$findUser[$get[userID]];$guildID]==true;
{execute:restricted-officialArtist}
]]

$ifAwaited[$getUserVar[memberIsArtist;$findUser[$get[userID]];$guildID]==true;
{execute:restricted-artist}
]]

$forEachChannel[1;{};restringirCanais;]

$sendMessage[<@$authorID> **$username[$findUser[$get[userID]]]** foi **$get[puniType]**!]

$setRole[$guildID;$findUser[$get[userID]];O membro foi $get[puniType];$getGuildVar[memberIsolatedRole;$guildID]]

$clientTyping
$setUserVar[memberIsolated;true;$findUser[$get[userID]];$guildID]

$onlyIf[$findUser[$get[userID]]!=$authorID;<@$authorID> | Você não pode restringir a si mesmo!]
$onlyIf[$findUser[$message[1];false]!=;❌ Usuário não encontrado!]

$let[guildID;$guildID]
$let[staffID;$authorID]
$let[userID;$ifAwaited[$findUser[$message[1]]==;$message[1];$findUser[$message[1]]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;$if[$getUserVar[memberIsolated==false;isolado;removido do isolamento]]

$onlyPerms[banmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **banir membros**.}  {footer:Que tal você entrar para a staff? $getGuildVar[prefixo]serstaff} {color:#6F03FC}}]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}, {
    name: "restringirCanais",
    type: "awaited",
    code: `
$modifyChannelPerms[1463277652562411787;$getGuildVar[memberIsolatedRole;$guildID];+viewchannel]

$modifyChannelPerms[$channelID;$getGuildVar[memberIsolatedRole;$guildID]44;-viewchannel]

$onlyIf[$get[guildID]==$guildID;]
`
},{
	name: "restricted-verified",
	type: "awaited",
	code: `
	$setRole[$guildID;$findUser[$get[userID]];O membro foi $get[puniType];$getGuildVar[memberVerifiedRole;$guildID]]
`
},{
	name: "restricted-artist",
	type: "awaited",
	code: `
$setRole[$guildID;$findUser[$get[userID]];O membro foi $get[puniType];$getGuildVar[memberArtistRole;$guildID]]
`
},{
	name: "restricted-officialArtist",
	type: "awaited",
	code: `
$setRole[$guildID;$findUser[$get[userID]];O membro foi $get[puniType];$getGuildVar[memberOfficialArtistRole;$guildID]]	
`
},{
	name: "restricted-staff",
	type: "awaited",
	code: `
$setRole[$guildID;$findUser[$get[userID]];O membro foi $get[puniType];$getGuildVar[allStaffRole;$guildID]]
`
}]