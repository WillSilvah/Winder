module.exports = {
    type: "guildMemberAdd",
    code: `
    $setMemberVar[memberJoinedHere?;true]
$setGuildVar[membersJoinedMonth;$sum[$getGuildVar[membersJoinedMonth];1]]

$sendMessage[$getGuildVar[batePapo];
$if[$isBot[$authorID]==false;
$addContainer[
$addSection[
$addTextDisplay[### 👋 <@$authorID> BEM VINDO!
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

`
}