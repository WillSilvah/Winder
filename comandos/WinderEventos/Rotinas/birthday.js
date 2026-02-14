module.exports = [{
    name: "niver-loop",
    type: "loop",
    every: "999",
    channel: "$getVar[consoleChat]",
    executeOnStartup: "true",
    code: `
$forEachUser[5;{};verificar_aniversariantes;]
$channelSendMessage[$getVar[consoleChat];🎂 | Verificando aniversários...]

$onlyIf[$hour:$minute:$second==07:00:00;] 
$onlyIf[$getGuildVar[birthdayChannel]!=;]
$timezone[America/Recife]
`
},{
	name: "verificar_aniversariantes",
    type: "awaited",
    code: `
$messagePublish[$get[birthMSG];$getGuildVar[birthdayChannel;$guildID]]

$channelSendMessage[$getGuildVar[batePapo;$guildID];🎂 | **PARABÉNS!** <@$authorID>, hoje é seu dia! Muitas felicidades! 🎉]

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

$ifAwaited[$authorID==$clientID;{execute:is-winder-birthday?}
$timezone[America/Recife]

`
},{
	name: "is-winder-birthday?",
	type: "awaitded",
	code: `

	
$messagePublish[$get[birthMSG1];$getGuildVar[birthdayChannel;$guildID]]
$channelSendMessage[$getGuildVar[batePapo;$guildID];Galera, vim avisar que hoje é o meu aniversário! 🎉 Hoje faço $math[$year-2021] anos, vamos comemorar amigos? ❤️
<@&1463138976494915646>
]

$let[birthMSG1;$channelSendMessage[$getGuildVar[birthdayChannel;$guildID];{newEmbed:
{title:🎉 É O MEU ANIVERSÁRIO!}
{description:
Esperei tanto por esse momento, hoje faço $math[$year-2021] aninhos, vamos comemorar? ❤️
}
{footer:Adicione o seu aniversário com o comando $getGuildVar[prefixo]aniversário}
{thumbnail:$userAvatar[$authorID]}
{color:Random}

}]]

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
