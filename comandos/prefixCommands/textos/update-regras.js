module.exports = [{
    name: "update-regras",
    type: 'messageCreate',
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;]
$deleteCommand
$sendMessage[$channelID;
$addContainer[
$addSection[
$addTextDisplay[### DIRETRIZES DA COMUNIDADE PATINHAS
-# **Válidas desde $discordTimestamp[$getTimestamp;FullDateShortTime]**

Acima de tudo, respeitamos os Termos de Serviço e as Diretrizes da Comunidade do Discord. Você pode consultá‑los nos links abaixo:
]
$addThumbnail[$guildIcon]
]
$addActionRow
$addButton[https://discord.com/terms;Termos de Serviço do Discord;Link;📃;false]
$addButton[https://discord.com/guidelines;Diretrizes da Comunidade do Discord;Link;📃;false]
$addSeparator[Large;true]
$addTextDisplay[### 💬 RESPEITO E BEM ESTAR
Mantenha um ambiente saudável para todos.

- Seja educado(a) e respeitoso(a) com os demais membros e com a equipe.
- Não seja agressivo(a), inconveniente ou desrespeitoso(a).
- Não pratique ou incentive:
- Preconceito, discriminação, intolerância, xenofobia ou racismo
- Extremismo político, religioso ou ideológico
- Assédio, perseguição ou qualquer forma de violência verbal
]
$addTextDisplay[### 🧹 AMBIENTE ORGANIZADO
Para manter os canais limpos e organizados:

- Sem spam: não envie mensagens repetitivas, flood, correntes ou conteúdo irrelevante em excesso.
- Use os canais corretamente: cada canal tem um tema específico. Confira a descrição antes de postar.
- Evite propagandas: não divulgue outros servidores, produtos, serviços ou qualquer conteúdo sem autorização da equipe.
]
$addTextDisplay[### 🔞 CONTEÚDO PROIBIDO
É terminantemente proibido postar:

- Conteúdo NSFW: pornografia, nudez, insinuações sexuais explícitas ou linguagem erotizada
- Gore e violência extrema: imagens ou descrições de violência gráfica, mutilações, mortes reais ou fictícias em detalhes explícitos
- Conteúdos sensíveis sem aviso: caso seja necessário tratar de algum assunto delicado, utilize o canal apropriado ou marque um moderador antes
]
$addTextDisplay[### 🔒 SEGURANÇA E PRIVACIDADE
Sua segurança e a dos outros é prioridade.

- Não se passe por outras pessoas: é proibido fingir ser outro membro, equipe ou qualquer pessoa real.
- Proteja sua conta: você é responsável por todas as ações feitas nela. Mantenha-a segura.
- Não compartilhe dados privados: evite expor informações pessoais suas ou de terceiros.
- Cuidado com links e arquivos: não compartilhe links suspeitos, arquivos com malware, trojans ou qualquer conteúdo malicioso.
- Nada de informações falsas: não compartilhe fake news ou desinformação proposital.
]
$addTextDisplay[### 🚫 CONDUTA COM A EQUIPE E OS MEMBROS

· Não importune, ameace ou cause desconforto a qualquer membro do servidor.
· Não mendigue cargos, especialmente cargos de staff.
· Respeite as decisões da equipe de moderação. Caso discorde, abra um ticket para conversarmos.
]
;$getGuildVar[guildColor]]
]

`
}]