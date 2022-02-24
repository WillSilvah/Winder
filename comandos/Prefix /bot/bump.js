module.exports = [{
name: "!d bump",
nonPrefixed: true,
 code: `$setUserVar[bump;$sum[$getUserVar[bump];1]] $addCmdReactions[:pwh_gato_like:]
 $onlyForChannels[861422411915722774;]
 $globalCooldown[2h;]
`
} 
