module.exports = [{
name: "atividade",
aliases: ["minhaatividade", "pda", "myactivity"],
desc: "Veja como está a sua experiência de atividade na temporada!",
category: "interação",
usage: "atividade @user/username/ID?",
code: `
$title[1;$customEmoji[pats_logo] $getObjectProperty[session;name];$getObjectProperty[session;banner]]
$description[1;
> **TEMPORADA**
## $getUserVar[msgXP;$mentioned[1];$guildID] PDAs
**💬 $getUserVar[messageMonth;$mentioned[1];$guildID] | Nível $ifAwaited[$getUserVar[msgXP;$mentioned[1];$guildID]<1000;0;$truncate[$filterMessage[$abbreviate[$getUserVar[msgXP;$mentioned[1];$guildID];2];k;K;T;t]]]**

> **EM TODA HISTÓRIA**
## $getUserVar[msgXP;$mentioned[1];$guildID] PDAs
**💬 $getUserVar[messageTotal;$mentioned[1];$guildID] | Nível $ifAwaited[$getUserVar[msgXPtotal;$mentioned[1];$guildID]<1000;0;$truncate[$filterMessage[$abbreviate[$getUserVar[msgXPtotal;$mentioned[1];$guildID];2];k;K;T;t]]]**
]
$image[1;$getObjectProperty[session;banner]]
$color[1;Green]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$reply

$createObject[session;$readFile[Recursos/session.json]]
`
}]