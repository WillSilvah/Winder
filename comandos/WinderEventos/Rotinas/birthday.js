module.exports = [{
    name: "niver-loop",
    type: "loop",
    every: "999",
    executeOnStartup: "true",
    code: `
$forEachUser[5;{};verificar_aniversariantes;]

$onlyIf[$hour:$minute:$second==07:00:00;] 
$onlyIf[$getGuildVar[birthdayChannel]!=;]
$timezone[America/Recife]
`
},{
	name: "verificar_aniversariantes",
    type: "awaited",
    code: `
$channelSendMessage[$getGuildVar[batePapo;$guildID];🎂 | **PARABÉNS!** <@$authorID>, hoje é seu dia! Muitas felicidades! 🎉]

$messagePublish[$get[birthMSG];$getGuildVar[birthdayChannel;$guildID]]

$let[birthMSG;$channelSendMessage[$getGuildVar[birthdayChannel;$guildID];{newEmbed:
{title:🎉 FELIZ ANIVERSÁRIO!}
{description:
Hoje é o aniversário do <@$authorID>! Vamos dar parabéns a ele? 
}
{footer:Adicione o seu aniversário com o comando $getGuildVar[prefixo]aniversário}
{thumbnail:$userAvatar[$authorID]}
{color:Random}

}]]


$onlyIf[$getUserVar[birthday;$authorID;$guildID]==$formatDate[$dateStamp;DD]/$if[$formatDate[$dateStamp;M]<10;0$formatDate[$dateStamp;M];$formatDate[$dateStamp;M]];]
$onlyIf[$authorID!=$clientID;]

$ifAwaited[$authorID==$clientID;{execute:winder-birthday}
$timezone[America/Recife]

`
},{
	name: "winder-birthday",
	type: "awaitded",
	code: `
	

$onlyIf[$getUserVar[birthday;$clientID;$guildID]==$formatDate[$dateStamp;DD]/$if[$formatDate[$dateStamp;M]<10;0$formatDate[$dateStamp;M];$formatDate[$dateStamp;M]];]
`
},{
	name: "onDeleteBirthday",
	type: "memberLeave",
    code: `
$deleteVar[birthday;$authorID;main]
$log[Registro de aniversário deletado: Usuário "$username" ($authorID) saiu.]
`
}]
