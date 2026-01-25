module.exports = [{
name: "awaitBooster",
type: "memberUpdate",
channel: "1462224055884189781",
code: `
$sendMessage[<@$authorID> Obrigado ❤️, é gratificante pensar que você gastou mais de **R$24,99** só para fazer a gente feliz. 😻
Eu já gostava muito de você e receber uma ação desse tipo me fez gostar ainda mais!
Você ganhou uns presentinhos, você merece! ^w^ 👏
]
$wait[20s]
$clientTyping

$sendMessage[<@$authorID> • <@&1463138976494915646>
{newEmbed:
{author:$userTag[$authorID] impulsionou a Patinhas!:https://cdn.discordapp.com/emojis/1463244909195821107.png?size=2048}
{description:
Vamos agradecer por esta ação generosa?
}
{color:#ff003b}
}
]

$onlyIf[$newMember[addedRoles]==$roleName[1463625995473911853;1462224054676099094];]
`
}]