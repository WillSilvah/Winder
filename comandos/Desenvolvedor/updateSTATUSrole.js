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
$ifAwaited[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberVerifiedRole;1462224054676099094]]==true;
{execute:memberIsVerified};
{execute:memberIsNotVerified}
]
	
$ifAwaited[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberOfficialArtistRole;1462224054676099094]]==true;
{execute:memberIsOfficialArtist};
{execute:memberIsNotOfficialArtist}
]
	
$ifAwaited[$hasRoles[1462224054676099094;$authorID;$getGuildVar[memberArtistRole;1462224054676099094]]==true;
{execute:memberIsArtist};
{execute:memberIsNotArtist}
]

$ifAwaited[$hasRoles[1462224054676099094;$authorID;$getGuildVar[allStaffRole;1462224054676099094]]==true;
{execute:memberIsStaff};
{execute:memberIsNotStaff}
]

`
},{
	name: "memberIsStaff",
	type: "awaited",
	code: `
$setUserVar[memberIsStaff;true;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsNotStaff",
	type: "awaited",
	code: `
$setUserVar[memberIsStaff;false;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsArtist;true;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsNotArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsArtist;false;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsOfficialArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsOfficialArtist;true;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsNotOfficialArtist",
	type: "awaited",
	code: `
$setUserVar[memberIsOfficialArtist;false;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsVerified",
	type: "awaited",
	code: `
$setUserVar[memberIsVerified;true;$authorID;1462224054676099094]
	
`
},{
	name: "memberIsNotVerified",
	type: "awaited",
	code: `
$setUserVar[memberIsVerified;false;$authorID;1462224054676099094]
	
`
}]