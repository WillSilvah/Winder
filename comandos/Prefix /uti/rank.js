module.exports = ({
name: "testerank",
code: `$botTyping
<@$authorID> | Qual ranking você quer ver?

> **❤️ adoros = Ranking dos membros mais adorados do servidor**
> **💬 ativos = Veja os membros mais ativos!**
> **🌼 cataventos = Veja os membros com a maior quantidade de cataventos.**
> **⭐ premiados = Veja os membros mais ativos de cada mês!**
> **😺 Miau = Miau**

$cooldown[30s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]
`
)}
