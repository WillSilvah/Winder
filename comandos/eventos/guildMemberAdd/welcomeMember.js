module.exports = {
    type: "guildMemberAdd",
    code: `
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth;$guildID;0];1]]

$sendMessage[$getGuildVar[batePapo];
$if[$isBot[$authorID]==false;
$addContainer[
$addSection[
$addTextDisplay[$if[$getMemberVar[memberJoinedHere?;$authorID;$guildID;false]==false;### 👋 <@$authorID> BEM VINDO!;### 🎉 <@$authorID> BEM VINDO DE VOLTA!]
**Sinta-se em casa, aproveite bem a nossa comunidade! **
]
$addTextDisplay[-# Veio pelo: $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fulano] | ID: $authorID]
$addThumbnail[$userAvatar]
]
$addSeparator[Large;true]

;Red]

$addActionRow
$addButton[https://discord.com/channels/1462224054676099094/1462590504188383304;Conheça a Patinhas!;Link;👋;false];
$addContainer[
$addSection[
$addTextDisplay[### 🤖 <@$authorID> ADICIONADO!
**Que isso? Um novo bot? 🤨**
]
$addThumbnail[$userAvatar]
]
$addSeparator[Large;true]
;Orange]
]
]
$wait[5s]
$setMemberVar[memberJoinedHere?;true]

$if[$inviterID[$guildID;$authorID]==1392261651402850464;
$!memberAddRoles[$guildID;$authorID;1481436987696091166]
]
`
}