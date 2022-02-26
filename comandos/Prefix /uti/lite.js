module.exports = [{
name: "lite",
code:`$awaitMessages[$channelID;$authorID;30s;ativar,desativar;ativar,desativar;<@$authorID> | Eu não gostei dessa sua resposta, portanto irei dormir, boa noite.]
$botTyping
<@$authorID> | Você quer ligar ou desativar o lite?

> <:pinwheel_lite:946754826417614938> | **ativar = Você não terá acesso a canais considerados "não essenciais", terá pouca movimentação no Discord e você não vai ter toda potência da pinwheel**
> <:pinw_amarelo:945622734484942849> | **desativar = Você terá acesso a todos os canais normalmente, terá muita movimentação no Discord e você vai ter toda potência da pinwheel**

$cooldown[10s;<@$authorID> | Aguarde **%time%** para poder executar esse comando de novo!]
`
},{
name: "ativar",
type:"awaited",
code: `$reply
$botTyping
<@$authorID> | Ativado!
$giveRole[$guildID;$authorID;946206255855312917]
`
},{
name: "desativar",
type:"awaited",
code: `$reply
$botTyping
<@$authorID> | Desativado!
$takeRole[$guildID;$authorID;946206255855312917]
`
}]
