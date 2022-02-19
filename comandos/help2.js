module.exports = [{
 name: 'test',
 code: `
$reactionCollector[$channelID;$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣,5️⃣;reaction1,reaction2,reaction3,reaction4,reaction5;yes]
$textSplit[$sendMessage[{newEmbed:{title:$userTag[$clientID] Ajuda!}
{color:RANDOM}
{description:
>>> **Selecione uma das opções abaixo#COLON#

1️⃣ • Moderação 
2️⃣ • Diversão 
3️⃣ • Utilidades 
4️⃣ • Economia
5️⃣ • Voltar**}};yes]; ]

$onlyBotPerms[manageemojisandstickers;***Eu não tenho permissão de \`Gerenciar emojis e Figurinhas\` para ativar o modo de reação por emoji.***]
`
}]