module.exports = {
 type: 'guildMemberUpdate',
 code: `
$onlyIf[$oldMember[addedRoles]==$getGuildVar[memberBoosterRole;$guildID];]

$sendMessage[$getGuildVar[batePapo];
$title[$emoji[$emojiID[pats_foxWoW]] @$userTag[$authorID] impulsionou a Patinhas!]
$description[
Vamos agradecer por esta ação generosa?
]
$color[Pink]
]

$startTyping[$channelID]
$wait[20s]
$sendMessage[$getGuildVar[batePapo];
<@$authorID> Obrigado ❤️, é gratificante pensar que você gastou mais de $bold[R$24,99] só para fazer a gente feliz. 😻
Eu já gostava muito de você e receber uma ação desse tipo me fez gostar ainda mais!
Você ganhou uns presentinhos, você merece! ^w^ 👏
]

`
}