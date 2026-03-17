module.exports = [{
    name: "anunciar-chamadas",
    type: 'messageCreate',
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;]
$arrayLoad[roleMembers;, ;$guildMemberIDs[$guildID;, ]]
$arrayForEach[roleMembers;id;
$onlyForRoles[
$log[Mensagem enviada para: $userTag[$env[id]]]

$sendDM[$env[id];
$addContainer[
$addSection[
$addTextDisplay[# MENSAGEM IMPORTANTE PARA VOCÊ!
-# Você recebeu isso pois tem o cargo "💬 - Chamar pra conversar" na Patinhas

Olá <@$env[id]> tudo bem? Sabemos que no Discord menções desnecessárias podem ser um incômodo e afastar membros das comunidades, então na Patinhas nós temos o cuidado de não ser muito chato nessa questão deixando que o membro escolha o que deseja receber facilmente no canal https://discord.com/channels/1462224054676099094/1470875996356874292 com avisos sobre cada um.
Temos 77 membros que pegaram o cargo que você tem e apenas poucos deles aparecem ao ser mencionado o que podemos suspeitar que tem acumulo de menções já que muitos membros pegaram o cargo logo no começo ao entrar no servidor sem ter uma noção da atividade.
## NOVAS REGRAS AOS CARGOS DE CHAMADAS
- Os cargos são públicos, isso significa que qualquer membro pode marcar eles para fazer alguma coisa e claro, tem regra de anti spam.
- Os cargos de chamadas só podem ser mencionados durante o horário comercial da Patinhas, das 06:30 até 22:00.
- Os cargos de chamadas não podem ser usados para divulgação.
- O membro leva advertência ao mencionar excessivamente o cargo.

Espero que você <@$env[id]> esteja gostando da Patinhas!
]
$addThumbnail[$guildIcon[1462224054676099094]]
]
;Yellow]
$addActionRow
$addButton[https://discord.com/channels/1462224054676099094/1470875996356874292;Gerenciar cargos;Link;⚙;false]
$addButton[https://discord.com/channels/1462224054676099094/1462224055884189778;Ler as diretrizes;Link;📕;false]
$addButton[https://discord.com/channels/1462224054676099094/1462224055884189781;Ir ao Bate Papo;Link;💬;false]
];1463138976494915646]
]

`
}]
