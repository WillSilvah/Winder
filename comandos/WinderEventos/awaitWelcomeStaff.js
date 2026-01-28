module.exports = [{
name: "awaitWelcomeStaff",
type: "memberUpdate",
channel: "$getGuildVar[staffChat]",
code: `
$channelSendMessage[$getGuildVar[batePapo];{newEmbed:
{author:@$userTag entrou na Equipe Patinhas!:https://cdn.discordapp.com/emojis/1464435933729263657.png?size=2048}
{color:Orange}
}]

$sendMessage[<@&$getGuildVar[allStaffRole]>
## DIGAM BOAS VINDAS PARA <@$authorID> NA EQUIPE PATINHAS!
]

$onlyIf[$checkContains[$newMember[addedRoles];$roleName[$getGuildVar[allStaffRole];$guildID]]==true;]
`
}]