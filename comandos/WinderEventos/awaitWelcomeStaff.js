module.exports = [{
name: "awaitWelcomeStaff",
type: "memberUpdate",
channel: "$getVar[staffChat]",
code: `
$channelSendMessage[$getVar[batePapo];{newEmbed:
{author:$userTag entrou na Equipe Patinhas!:https://cdn.discordapp.com/emojis/1464435933729263657.png?size=2048}
{color:Orange}
}]

$sendMessage[<@&894592054175342602>
## DIGAM BOAS VINDAS PARA <@$authorID> NA EQUIPE PATINHAS!
]

$onlyIf[$checkContains[$newMember[addedRoles];$roleName[$getVar[allStaffRole];$getVar[guildID]]]==true;]
`
}]