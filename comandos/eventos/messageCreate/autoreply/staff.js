module.exports = [{
    type: "messageCreate",
    code: `
$onlyIf[$mentioned[0]==$authorID;]
$reply
$if[$includes[$toLowercase[$message];como]|$includes[$toLowercase[$message];viro;entro;participo;participar]|$includes[$toLowercase[$message];staff;mod;adm;admiro;admin;moderador;administração;administrador]==true|true|true;
$startTyping[$channelID]
$wait[2s]
$if[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;
$sendMessage[$channelID;Que ótimo que você quer participar da Equipe Patinhas! Primeiramente, responda o formulário que está no canal <#1466894271457136821> com **sinceridade** e **atenção**. Desejo boa sorte! 😄
];
$sendMessage[$channelID;É de fato interessante participar da Equipe Patinhas, mas lhe aviso logo que **você não está apto a se entrar na equipe** pois não tem o cargo **Peludo Verificado**. Isso significa que você não enviou 200 mensagens aqui ainda, caso consiga, o canal <#1466894271457136821> estará disponível para você. 🫠
]
]
]    
    
`}]