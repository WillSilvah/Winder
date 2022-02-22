module.exports = [{
name: "!d bump",
nonPrefixed: true,
 code: `$setUserVar[bump;$sum[$getUserVar[bump];1]] $addCmdReactions[<:pwh_gato_like:930060681519173663>]
 $onlyForChannels[861422411915722774;]
 $globalCooldown[2h;]
`
} ,{
name: "!d bump",
nonPrefixed: true,
code: `$useChannel[861422411915722774]
<@&869508084404469831> | Bump disponível!
> **__Digite !d bump para ajudar o servidor a crescer__**
$wait[2h]
`
}]
