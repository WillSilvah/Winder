module.exports = [{
    type: "guildMemberAdd",
    code: `
$if[$userCreatedAt[$authorID]>$math[$getTimestamp-$parseString[7d]];
$sendMessage[$getGuildVar[staffAlertChat];
$addContainer[
$addSection[
$addTextDisplay[### @$userTag: conta criada $discordTimestamp[$userCreatedAt[$authorID];RelativeTime]!
ID do usuário: $authorID
Veio pelo $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fulano]
<@&$getGuildVar[allStaffRole]>
]
$addThumbnail[$userAvatar]
]
;Red]

]
] 
`}]