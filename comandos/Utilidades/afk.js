module.exports = [{
	name: "afk",
	desc: "Vai ficar fora do Discord? Use esse comando e permita-me avisar a outras pessoas que você não pode responder no momento!",
	category: "Utilidades",
	usage: "afk motivo?",
	code: `

$setGlobalUserVar[afkReason;$if[$message!=;$message;Acredita que eu também queria saber?];$authorID]
$setGlobalUserVar[afkStatus;true;$authorID]

$sendMessage[<@$authorID> AFK ativado!]

`
},{
	name: "$alwaysExecute",
	code: `
$sendMessage[<@$authorID> **$userTag[$mentioned[1]]** está afk!
{newEmbed:
{author:$getGlobalUserVar[afkReason;$mentioned[1]]}
{color:Red}
}
]

$onlyIf[$getGlobalUserVar[afkStatus;$mentioned[1]]==true;]
$onlyIf[$mentioned[1]!=$authorID;]
`
},{
	name: "$alwaysExecute",
	code: `
$sendMessage[<@$authorID> | Olá, que bom que você voltou! ❤️]

$setGlobalUserVar[afkStatus;false;$authorID]
$setGlobalUserVar[afkReason;;$authorID]

$onlyIf[$getGlobalUserVar[afkStatus;$authorID]==true;]
`
}]
