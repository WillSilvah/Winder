module.exports = [{
    name: "update-sabarte",
    type: 'messageCreate',
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;]
$deleteCommand
$sendMessage[$channelID;
$addContainer[
$addSection[
$addTextDisplay[# SABARTE
**UM EVENTO ARTÍSTICO SEMANAL**
]
$addThumbnail[https://abs.twimg.com/emoji/v2/72x72/1f3a8.png]
]
$addSeparator[Large;true]
$addTextDisplay[O Sabarte é um evento semanal focado para os artistas da comunidade criarem uma arte baseando-se em um tema.]
$addSeparator[Large;true]
$addTextDisplay[## COMO FUNCIONA?
Todo sábado ás 09:00 da manhã (horário de Brasília), é anunciado em <#1472363631021920376> qual o tema da semana. Daí, os artistas podem começar a criar um desenho, texto, poema, música, qualquer coisa que seja arte que envolva o tema anunciado.
Após o anúncio, o artista deverá postar as artes em <#1468639302333501660> com a tag 🎨SABARTE.]
$addTextDisplay[## REGRAS
- Não é permitido o uso de imagens geradas por Inteligência Artificial.
- Não é permitido PLÁGIO e o envio de artes que não foram feitas por VOCÊ.
- É permitido utilizar personagens da comunidade para fazer as artes. Por exemplo: O Winder.]
;Yellow]
]
`
}]