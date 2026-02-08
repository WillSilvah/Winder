module.exports = [{
name: "pergunta",
aliases: ["perguntar", "8ball", "ask"],
desc: "Faça uma pergunta ao Winder e ele vai responder você!",
category: "Diversão",
usage: "pergunta texoAqui",
code: `
$get[reply]
$reply
$let[reply;$if[$checkContains[$message;hespin é furry;lys é furry;kus é furry]==true;Claro que sim!!;$randomText[Eu não sei de nada sobre isso!;Sempre!;Beleza, mas você já votou na Pinwheel hoje?;Sempre.;Sim.;Não.;Sim!;Não!;Eu vou fingir que eu não li isso!;Sem dúvidas;Óbvio que não!;Óbvio que não.;Óbvio que sim.;Óbvio que não.;Jesus amado;Senhor amado;Vou perguntar pro +vieirinha porquê estou sem respostas!;Pergunta pro Cauã, ele sabe!;Claro que sim!;Claro que não!;Claro que sim.;Claro que não.]]]


$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}]