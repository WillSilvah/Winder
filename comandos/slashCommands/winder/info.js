module.exports = {
  code: `
$interactionReply[
$addContainer[
$addSection[
$addTextDisplay[### $toUpperCase[$userDisplayName[$clientID]]]
$addTextDisplay[
🕝 Online $discordTimestamp[$math[$getTimestamp-$uptime];RelativeTime] ($ParseDigital[$uptime])
🚀 Versão: **$getVersion**
🔥 Uso da CPU: **$truncate[$math[($cpu/1000)*100]]%**
-# $cpuModel
👨‍💻 Sistema operacional: **$toTitleCase[$os]**
🏓 Ping: **$pingms**
🏓 Database Ping: **$dbPingms**
$customEmoji[javascript] Node.JS: **$nodeVersion**
⚙️ Versão do ForgeScript: **$packageVersion**
🤖 **$applicationCommandCount[;true]** comandos de barra

]
$addThumbnail[$userAvatar[$clientID]]
]
;$memberDisplayColor[$guildID;$clientID]]
]
  `,
data: {
  "type": 1,
  "name": "info",
  "description": "informações avançadas do Winder"
},
};
