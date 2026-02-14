module.exports = [{
name: "winder ForEachRoleStatus",
desc: "Permite o desenvolvedor forçar uma varredura do Winder",
category: "Desenvolvedor",
usage: "winder ForEachRoleStatus",
code: `
$forEachUser[1;{};setMemberStatus;]
$let[guildID;$guildID]

$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]

`
},{
	name: "setMemberStatus",
	type: "awaited",
	code: `
$ifAwaited[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole;$guildID]]==true;
{execute:memberIsVerified};
{execute:memberIsNotVerified}
]
	
$ifAwaited[$hasRoles[$guildID;$authorID;$getGuildVar[memberOfficialArtistRole;$guildID]]==true;
{execute:memberIsOfficialArtist};
{execute:memberIsNotOfficialArtist}
]
	
$ifAwaited[$hasRoles[$guildID;$authorID;$getGuildVar[memberArtistRole;$guildID]]==true;
{execute:memberIsArtist};
{execute:memberIsNotArtist}
]

$ifAwaited[$hasRoles[$guildID;$authorID;$getGuildVar[allStaffRole;$guildID]]==true;
{execute:memberIsStaff};
{execute:memberIsNotStaff}
]

$onlyIf[$get[guildID]==$guildID;]
`
},{
	name: "memberIsStaff",
	type: "awaited",
	code: `
$setUserVar[memberIsStaff;true;$authorID;$guildID]
	
`
},{
	name: "memberIsNotStaff",
	type: "awaited",
	code: `
$setUserVar[memberIsStaff;false;$authorID;$guildID]
	
`
},{
	name: "memberIsArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsArtist;true;$authorID;$guildID]
	
`
},{
	name: "memberIsNotArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsArtist;false;$authorID;$guildID]
	
`
},{
	name: "memberIsOfficialArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsOfficialArtist;true;$authorID;$guildID]
	
`
},{
	name: "memberIsNotOfficialArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsOfficialArtist;false;$authorID;$guildID]
	
`
},{
	name: "memberIsVerified",
	type: "awaited",
	code: `
$setUserVar[memberIsVerified;true;$authorID;$guildID]
	
`
},{
	name: "memberIsNotVerified",
	type: "awaited",
	code: `
$setUserVar[memberIsVerified;false;$authorID;$guildID]
	
`
}]