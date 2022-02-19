module.exports = {
name: "fazerparceria",
code: `
<@$authorID> | Parceria com <@$mentioned[1]> feita com sucesso!
$channelSendMessage[904657789203415080;🤝 | Representante: <@$mentioned[1]\n🔗 | Link: https;//discord.gg/$message[2]\n<@&890955154701041734>]
$onlyForRoles[890955154701041734;<@$authorID> | Você precisa ser caçador de parcerias para poder usar este comando!]
`
}