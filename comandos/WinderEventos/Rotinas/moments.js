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

$ifAwaited[$hour:$minute:$second==02:00:00;{execute:verifyMembersStatus}]

$timezone[America/Recife]
`
},{
	name: "verifyMemberStatus",
	type: "awaited",
	code: `
$forEachUser[1;{};setMemberStatus;]
$let[guildID;1462224054676099094]
	
`
},{
name: "auto-reset",
type: "awaited",
code: `


$resetGuildVar[membersJoinedMonth]
$resetUserVar[metaXP]
$resetUserVar[messageMonth]
$resetUserVar[votesMonth]
$resetUserVar[msgXP]
$resetGuildVar[guildMonthMessages]

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
}]