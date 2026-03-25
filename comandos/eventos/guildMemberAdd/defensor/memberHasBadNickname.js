module.exports = [{
    type: "guildMemberAdd",
    code: `
    $onlyIf[$includes[$userDisplayName / $nickname / $userTag;卐;卍;࿕;࿖;࿗;࿘;ꖦ;ᛋ;ϟ;ᛋᛋ;clatebit;🇮🇱;trading;platform;Zeta;ζ;phi;φ;$USD;cavetodex]==true] $c[Verifica se o nome do usuário tem os caracteres e termos, se sim, executa o banimento]
    
    $let[userID;$authorID]
    $let[reason;Foi detectado conteúdo impróprio em seu perfil, por segurança, resolvi banir você em prioridade de nosso bem-estar.]
    $let[staffID;$clientID]
    $let[type;banido]
    
    $sendMessage[$getGuildVar[batePapo];w!ban <@$authorID> $get[reason]] $c[Enfeite, para dizer que foi o próprio bot que executou a função]
    $winderBan $c[Função personalizada que executa outras ações em conjunto]
    $deleteCommand
    $sendMessage[$getGuildVar[batePapo];<@$clientID> **$username[$get[userID]]** foi **$get[type]**!\n> $bold[$get[reason]]]
`
}]    