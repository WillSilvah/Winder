module.exports = [{
    type: "interactionCreate",
    code: `$ephemeral
    $onlyIf[$commandName!=aniversário]
    $onlyIf[$getMemberVar[birthdayYear]==;]
    $interactionReply[Opa mano! Percebi que você não registrou o seu aniversário, como que vamos te parabenizar? Use o comando **/aniversário adicionar** ai pow!\nO aniversário também serve para a demografia, saber qual a média de idade dos membros, eles aparecem no **/perfil**]
`
}]