
module.exports = {
name: "perguntar",
aliases: ['ask'],
code: `$reply
$botTyping
$onlyIf[$message!=;<@$authorID> | Faça alguma pergunta e eu tentarei responder ela da forma mais padronizada possível. **$getServerVar[prefixo]$randomText[perguntar;ask] <pergunta>**]
<@$authorID> $randomText[Hmm, eu não sei nada sobre isso.;Claro!;Com certeza.;Absoluta;Óbvio;Não;Nunca;Pergunta no posto Ipiranga!;O google provavelmente sabe;Esqueça a minha existência]
$cooldown[10s;<@$authorID> | Espere **%time%** para executar este comando novamente]
`
} 
