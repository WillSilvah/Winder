module.exports = [{
name: "memberVerified",
type: "memberUpdate",
channel: "$getVar[batePapo]",
code: `
$sendDm[{newEmbed:
{title:<:pats_foxWoW:1463244909195821107> Parabéns, você virou furro verificado na Patinhas!}
{url:https://www.bing.com/search?q=Folhas+de+verifica%C3%A7%C3%A3o&qs=n&form=QBRE&sp=-1&lq=0&pq=folhas+de+verifica%C3%A7%C3%A3o&sc=10-21&sk=&cvid=A51B72AD645C4C6F8B4B477A9279AD73&ghsh=0&ghacc=0&ghpl=}
{description:
Você enviou uma quantidade de mensagens e agora pode aproveitar a Patinhas tendo permissões básicas!
Veja mais o que você pode fazer:

1. Enviar imagens, vídeos, arquivos e áudios em chats de texto (permitidos)
2. Alterar o seu apelido, como também mudar o seu avatar exclusivamente neste servidor (Com nitro)
3. Poder usar comandos do Winder mais livremente.
4. Pode enviar links e mídia nos canais de texto.
5. Começou a ganhar pontos de atividades.
6. E outras coisas!

}
{footer:Espero que esteja gostando da Piwnheel. Se quiser, convide seus amigos para conhecer esta comunidade!}
{color:Red}
{thumbnail:https://cdn.discordapp.com/emojis/1463245277304459345.png?size=2048}
};$authorID]

$onlyIf[$newMember[addedRoles]==$roleName[$getVar[memberVerifiedRole]];]
`
}]