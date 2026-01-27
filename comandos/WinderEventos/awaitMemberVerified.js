module.exports = [{
name: "memberVerified",
type: "memberUpdate",
channel: "861337787192836117",
code: `
$sendDm[{newEmbed:
{title:<:gato_wow:1161731796459860018> Parabéns, você virou membro verificado na Pinwheel!}
{url:https://www.bing.com/search?q=Folhas+de+verifica%C3%A7%C3%A3o&qs=n&form=QBRE&sp=-1&lq=0&pq=folhas+de+verifica%C3%A7%C3%A3o&sc=10-21&sk=&cvid=A51B72AD645C4C6F8B4B477A9279AD73&ghsh=0&ghacc=0&ghpl=}
{description:
Você enviou uma quantidade de mensagens e agora pode aproveitar a Pinwheel tendo permissões básicas!
Veja mais o que você pode fazer:

1. Enviar imagens, vídeos, arquivos e áudios em chats de texto (permitidos)
2. Alterar o seu apelido, como também mudar o seu avatar exclusivamente neste servidor (Com nitro)
3. Poder usar comandos do Winder mais livremente.
4. Pode enviar links nos canais de texto.
5. E outras coisas!

}
{footer:Espero que esteja gostando da Piwnheel. Se quiser, convide seus amigos para conhecer esta comunidade!}
{color:$dyColor[green;light]}
{thumbnail:https://i.ibb.co/q1tKKKj/IMG-20240530-092934.png}
};$authorID]

$onlyIf[$newMember[addedRoles]==$roleName[1065319142271496212];]
`
}]