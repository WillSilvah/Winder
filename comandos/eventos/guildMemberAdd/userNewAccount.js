module.exports = [{
    type: "guildMemberAdd",
    code: `
    $if[$userCreatedAt[$authorID]>$math[$getTimestamp-$parseString[7d]];
     $sendMessage[$getGuildVar[staffAlertChat];
      $addContainer[
       $addSection[
        $addTextDisplay[### @$userTag: conta criada $discordTimestamp[$userCreatedAt[$authorID];RelativeTime]!]
        $addTextDisplay[ID do usuário: $authorID]
        $addTextDisplay[Veio pelo $if[$inviterID[$guildID;$authorID]!=;@$username[$inviterID[$guildID;$authorID]];@Fulano]]
        $addTextDisplay[<@&$getGuildVar[allStaffRole]>]
       $addThumbnail[$userAvatar]
       ]
      ;Red]
      ]
     $if[$getGuildVar[sleepMode]==true;
      $sendMessage[$getGuildVar[batePapo];🚫 <@$authorID> foi isolado por segurança de todos nós.]
       $isolar[$authorID]
        $sendDMPunishment[$authorID;$clientID;Conta com comportamento robótico ou suspeito.;isolado;]
        $punishmentlog[$authorID;$clientID;Conta com comportamento robótico ou suspeito.;isolado;]
     ] 
      
    ] 
`}]