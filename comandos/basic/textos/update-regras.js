module.exports = [{
    name: "update-regras",
    type: 'messageCreate',
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;]

$sendMessage[$channelID;
$addSection[
$addTextDisplay[# COMUNIDADE PATINHAS
**Diretrizes de como manter uma comunidade organizada.**]
$addThumbnail[$guildIcon[1462224054676099094]]
]
$addSeparator[Large;true]

$addTextDisplay[
### TERMOS DE SERVIÇO E DIRETRIZES
]
$addTextDisplay[
- Além das regras direcionadas a Patinhas, você deve também seguir os $bold[Termos de Serviços] e $bold[Diretrizes] do Discord.
]

$addActionRow
$addButton[https://discord.com/terms;Termos de Serviço;Link;📃;false]
$addButton[https://discord.com/guidelines;Diretrizes;Link;📃;false]
]

$sendMessage[$channelID;
$addSeparator[Large;true]
$addTextDisplay[## BEM ESTAR
- Mantenha o nosso bem-estar no servidor! Seja agradável, educado e não seja inconveniente ou agressivo.
]

$addTextDisplay[## AMBIENTE AGRADÁVEL
- Para manter um ambiente agradável no servidor não envie spam, flood, correntes ou qualquer outro conteúdo que atrapalhe o fluxo dos canais de texto ou áudio.
- A Patinhas valoriza os valores humanos, é proibido palavrões em excesso, desrespeito, preconceito, intolerância, xenofobia, extremismo (ou referências e relacionados à isso).
]

$addTextDisplay[
## CONTEÚDO INADEQUADO
- Não poste conteúdo NSFW, Gore (ou referências e relacionados a isso) ou mensagens que não condizem com o canal. Vale lembrar que não é permitido divulgação do que quer que seja (nome de usuário, canais de texto e etc) sem autorização prévia.
]

$addTextDisplay[
## SEGURANÇA PESSOAL
- Você não pode se passar por outras pessoas ou membros da equipe. Você será responsável por qualquer ação realizada na sua conta, então não a empreste e a proteja.
- Não envie dados privados de outras pessoas, e nem insinue ou ensine outras pessoas a fazer isso, não compartilhe links e arquivos infectados por malware, trojan ou qualquer outro tipo de vírus e não compartilhe informações falsas.
]

$addTextDisplay[
## IMPORTUNAÇÃO
- Não importune os membros do servidor e da equipe, não mendigue cargos (principalmente de staff) e não seja desconfortável para qualquer membro.
]
$addSeparator[Large;true]
$addSection[
$addTextDisplay[## DESBANIMENTO
- Por fim, temos a chance de você se redimir sobre seus erros, caso tenha conhecimento sobre os seus atos, acesse o nosso formulário de desbanimento.
]
$addButton[https://dyno.gg/form/8e826f68;Formulário de Desbanimento;Link;⚒️;false]
]

]

`
}]