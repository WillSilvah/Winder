module.exports = {
name: "verificarpermissões",
aliases: ['verificarpermissão','checkperms'],
code: `
  $reply
$onlyPerms[$message[1];<@$authorID> | Você não tem permissão para **$message[1]**, você acha que tem? contate um fundador.]
<@$authorID> | Você tem permissão de **$message[1]**
Você acha que não deveria ter? Contate um fundador.
$argsCheck[1;<@$authorID> | Qual permissão deseja analisar? **$getServerVar[prefixo]verificarpermissão** | Use $getServerVar[prefixo]permissõeslista]
$suppressErrors[<@$authorID> o desenvolvedor fez essa desgraça de comando errado ou você usou essa porra de comando da forma errada, tente novamente ou vá tomar no cu.]
`
}