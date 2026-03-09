module.exports = {
 type: 'guildMemberUpdate',
 code: `
$onlyIf[$oldMember[addedRoles]==$getGuildVar[memberBoosterRole;$guildID];]

$sendMessage[$getGuildVar[batePapo];
$addContainer[
$addSection[
$addTextDisplay[## $emoji[$emojiID[pats_foxWoW]] <@$authorID> impulsionou a Patinhas!
**Vamos agradecer por esta ação generosa?**]
$addThumbnail[$userAvatar[$authorID]]
]
$addSeparator[Large;true]
;#d505ff]
]

$startTyping[$getGuildVar[batePapo]]
$wait[20s]
$sendMessage[$getGuildVar[batePapo];
<@$authorID> Obrigado ❤️, é gratificante pensar que você gastou mais de $bold[R$24,99] só para fazer a gente feliz. 😻
Eu já gostava muito de você e receber uma ação desse tipo me fez gostar ainda mais!
Você ganhou uns presentinhos, você merece! ^w^ 👏
]

`
}