module.exports = {
  code: `
$interactionReply[
$addContainer[
$addSection[
$addTextDisplay[## VOTE NA PATINHAS!
Você ganha **bônus de atividade** e enquanto conversa, assim você pode juntar mais PDAs e se representar um membro ativo e aos **60 votos totais**, você ganha o cargo de **Apoiador!**
]
$addThumbnail[$guildIcon]
]
;$getGuildVar[guildColor]]
$addActionRow
$addButton[https://discords.com/servers/$guildID/upvote;Vote na patinhas! (discords.com);Link;⬆️;false]
]
  
  `,
data: {
  "type": 1,
  "description": "Quer votar na Patinhas? Então vamos lá!",
  "name": "votar",
  "nsfw": false
},
}
