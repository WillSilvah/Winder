module.exports = [{
name: "lembrar",
aliases: ["lembrete", "remind"],
desc: "Para ter total certeza que você não vai esquecer de nada, deixe o Winder te lembrar!",
category: "Utilidade",
usage: "lembrar tempo lembrete",
code: `
$sendMessage[
<@$authorID> Certo! Vou lhe lembrar de \`\`$messageSlice[1]\`\` daqui a \`\`$message[1]\`\`!
> **ID: $get[ID]**
{actionRow:{button:Me avise na DM!:success:dmTrue}}{actionRow:{button:Não me avise na DM:danger:dmFalse}}
]

$let[ID;$setTimeout[remindMe;$message[1];{
"userID": "$authorID",
"channelID": "$channelID",
"message": "$messageSlice[1]"
};true;]]

$onlyIf[$argsCount>1;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
name: "dmTrue",
type: "interaction",
prototype: "button",
code: `
$setUserVar[remindDM;true;$authorID;$guildID]

$interactionReply[🔔 | Certo! Irei enviar lembretes na sua mensagem direta também. Lembre-se de ver se pelo menos neste servidor, eu consiga enviar DMs para você!
> **Nos próximos lembretes, eu irei enviar também na sua DM caso não responda a pergunta!**
;;;;everyone;true]

$onlyIf[$getObjectProperty[j2;members[0]]==$authorID;]

$createObject[j2;$getObjectProperty[j1;mentions]]
$createObject[j1;$fetch[message;$messageID]]

`
},{
name: "dmFalse",
type: "interaction",
prototype: "button",
code: `
$setUserVar[remindDM;false;$authorID;$guildID]

$interactionReply[
🔔 | Certo! Não irei enviar lembretes na sua mensagem direta.
> **Nos próximos lembretes, eu não irei enviar na sua DM caso não responda a pergunta!**
;;;;everyone;true]

$onlyIf[$getObjectProperty[j2;members[0]]==$authorID;]

$createObject[j2;$getObjectProperty[j1;mentions]]
$createObject[j1;$fetch[message;$messageID]]
`
},{
name: "remindMe",
type: "timeout",
code: `
$sendDm[{newEmbed:
{author:$username[$clientID] lembretes:https://abs.twimg.com/emoji/v2/72x72/1f514.png}
{description:
$timeoutData[message]
}
{color:Blue}

};$timeoutData[userID];]

$onlyIf[$getUserVar[remindDM;$timeoutData[userID];$guildID]==true;]

$channelSendMessage[$timeoutData[channelID];🔔 | <@$timeoutData[userID]> Vim te lembrar de \`\`$timeoutData[message]\`\`!;false]
`
}]
