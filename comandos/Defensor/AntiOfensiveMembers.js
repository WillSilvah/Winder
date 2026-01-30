module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[$toLowercase[$username | $userTag];ᛋ;ϟ;ᛋᛋ;clatebit;trading;platform;Zeta; ζ ;phi;φ;$USD;cavetodex]==true;
{execute:ofensive-banir}
]

$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "antiOfensiveMembers",
type: "memberUpdate",
channel: "$getGuildVar[consoleChat]",
code: `
True, contem ofensividades
$toLowercase[$newMember[name] | $newMember[nick]]

$onlyIf[$checkContains[$toLowercase[$newMember[name] | $newMember[nick]];ᛋ;ϟ;ᛋᛋ;clatebit;trading;platform;Zeta; ζ ;phi;φ;$USD;cavetodex]==true;]

`
},{
name: "ofensive-banir",
type: "awaited",
code: `
$sendMessage[<@$clientID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[1==1;{execute:punishment-log}]

$ban[$guildID;$authorID;0;Banido por: $username[$get[staffID]] | Motivo: $get[reason]]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$sendMessage[w!ban <@$authorID> $get[reason]]
$clientTyping

$let[staffID;$clientID]
$let[userID;$authorID]
$let[reason;Foi detectado conteúdo impróprio em seu perfil, por segurança, resolvi banir você em prioridade de nosso bem-estar.]
$let[puniType;banido]

`
},{
name: "toxic-deletar",
type: "awaited",
code: `
$deleteCommand


`
}]
