//$day = Retorna o nome da semana
//$hour:$minute:$second-$date/$formatDate[$dateStamp;MM]/$year
module.exports = [{
name: "loopCommand",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 999,
code: `
$ifAwaited[$date-$hour:$minute:$second==01-00:00:00;{execute:auto-reset}]

$ifAwaited[$hour:$minute:$second==02:00:00;{execute:verifyMemberStatus}]

$timezone[America/Recife]
`
},{
	name: "verifyMemberStatus",
	type: "awaited",
	code: `
$forEachUser[1;{};setMemberStatus;completeMemberStatus]
	
`
},{
name: "auto-reset",
type: "awaited",
code: `
$resetGuildVar[membersJoinedMonth]
$resetGuildVar[guildMonthMessages]
$forEachUser[5;{};resetUserMonthVars;resetUserMonthVarsComplete]

$setGuildVar[guildPDAmedia;$get[media];$guildID]
$let[media;$truncate[$math[$get[soma]/$membersCount[$guildID;all;false]]]]
$let[soma;$math[$replaceText[$replaceText[$userLeaderBoard[$guildID;msgXP;desc;{value},;$membersCount[$guildID;all;false];1;main];,;+];+
;+]0]]

$writeFile[Recursos/session.json;
{
    "name": "Pré Temporada: O começo",
    "nameShort": "PRÉ: O começo",
    "banner": "https://i.ibb.co/7NXHgpxQ/banner-pr-temporada.png"
};utf8]

`
},{
	name: "resetUserMonthVars",
	type: "awaited",
	code: `
$resetUserVar[metaXP]
$resetUserVar[messageMonth]
$resetUserVar[votesMonth]
$resetUserVar[msgXP]

$deleteVar[metaXP;$authorID]
$deleteVar[messageMonth;$authorID]
$deleteVar[votesMonth;$authorID]
$deleteVar[msgXP;$authorID]

	
`
},{
	name: "resetUserMonthVarsComplete",
	type: "awaited",
	code: `
$channelSendMessage[$getVar[consoleChat];{newEmbed:
{title:Variáveis de temporada resetadas.}
{color:Green}
}]
	
`
}]