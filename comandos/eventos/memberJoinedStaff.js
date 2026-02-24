module.exports = {
 type: 'guildMemberUpdate',
 code: `
$onlyIf[$oldMember[addedRoles]==$getGuildVar[allStaffRole;$guildID];]

$sendMessage[$getGuildVar[staffChat];
$addSection[
$addTextDisplay[
### DIGAM BOAS VINDAS AO <@$authorID> NA EQUIPE PATINHAS!
$bold[Mais um membro na Equipe!]
$addThumbnail[$userAvatar[$authorID]]
]
]
$addSeparator[Large;true]
$addTextDisplay[<@$getGuildVar[allStaffRole]>]
]

$sendMessage[$getGuildVar[batePapo];
$addSection[
$addTextDisplay[### O @$username entrou na Equipe Patinhas! 👏
]
$addThumbnail[$userAvatar[$authorID]]
]
$addSeparator[Large;true]
]

`
}