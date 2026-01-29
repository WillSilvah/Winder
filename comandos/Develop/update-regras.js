module.exports = [{
name: "update-regras",
code: `
$author[1;Comunidade Pinwheel: Para tudo e todos;https://cdn.discordapp.com/emojis/1181219202070237275.png?size=2048]
$description[1;
$addField[1;Termos de Serviço e Diretrizes;- Além das regras direcionadas a pinwheel, você deve também seguir os [Termos de Serviços](https://discord.com/terms 'Termos de Serviços') e [Diretrizes](https://discord.com/guidelines 'Diretrizes') do Discord.]
]
$attachment[https://cdn.discordapp.com/attachments/785632865709981756/1195435526317150328/IMG_20240112_145643.png?ex=65b3fb17&is=65a18617&hm=2ff864119d00d7b18bb40fb31638578e51bb12907160c033e75f9d7835075e46&;winder-rules.png]
$color[1;$dyColor[cyan;light]]

$description[2;
$addField[2;Bem-estar;- Mantenha nosso bem-estar no servidor! Seja agradável, educado e não seja inconveniente ou agressivo.]
]
$color[2;$dyColor[green;light]]

$description[3;
$addField[3;Ambiente agradável;- Para manter um ambiente agradável no servidor não envie spam, flood, correntes ou qualquer outro conteúdo que atrapalhe o fluxo dos canais de texto ou áudio.]
]
$color[3;$dyColor[green;light]]

$description[4;
$addField[4;Respeito;- A pinwheel valoriza os valores humanos, é proibido palavrões em excesso, desrespeito, preconceito, intolerância, xenofobia, extremismo (ou referências e relacionados à isso).]
]
$color[4;$dyColor[cyan;light]]

$description[5;
$addField[5;Conteúdos inadequados;- Não poste conteúdo NSFW, NSFL, Gore (ou referências e relacionados a isso) ou mensagens que não condizem com o canal. Vale lembrar que não é permitido divulgação do que quer que seja (nome de usuário, canais de texto e etc) sem autorização prévia.]
]
$color[5;$dyColor[red;light]]

$description[6;
$addField[6;Segurança pessoal;- Você não pode se passar por outras pessoas ou membros da equipe. Você será responsável por qualquer ação realizada na sua conta, então não a empreste e a proteja.
- Não envie dados privados de outras pessoas, e nem insinue ou ensine outras pessoas a fazer isso, não compartilhe links e arquivos infectados por malware, trojan ou qualquer outro tipo de vírus e não compartilhe informações falsas.]
]
$color[6;$dyColor[orange;light]]

$description[7;
$addField[7;Importunação;- Não importune os membros do servidor e da equipe, não mendigue cargos (principalmente de staff) e não seja desconfortável para qualquer membro.]
]
$color[7;$dyColor[green;light]]

$description[8;
$addField[8;Desbanimento;- Por fim, temos a chance de você se redimir sobre seus erros, caso tenha conhecimento sobre os seus atos, acesse: [Formulário de Desbanimento](https://dyno.gg/form/bbc30fb3 'Formulário de Desbanimento').]
]
$footer[8;Por vias das dúvidas, tenha o bom senso.]
$color[8;$dyColor[orange;light]]

$deleteCommand
$onlyIf[$authorID==494795833351602176;]
`
}]