module.exports = [{
    type: "interactionCreate",
    code: `$ephemeral
    $wait[2s]
    $onlyIf[$getMemberVar[birthdayYear]==;]
    $interactionReply[Opa mano! Percebi que você não registrou o seu aniversário, como que vamos te parabenizar? Use o comando **/aniversário adicionar** ai pow!\nO aniversário também serve para a demografia, saber qual a média de idade dos membros, eles aparecem no **/perfil**]
`
}]