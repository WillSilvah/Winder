module.exports = {
  name: "sobremim",
  code: `
  $reply 
Seu sobremim foi alterado para: **$message**
$setUserVar[sobremim;$message;$authorID]
  $onlyIf[$message!=;<@$authorID> Você precisa dizer qual frase no perfil você deseja ter!]`
}