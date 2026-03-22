module.exports = [{
    name: "badges",
    params: [
    {
      name: 'userID',
      description: "ID do usuário",
      required: true
    }
   ],
   code: `
    $let[badges;$if[$userGuildTag[$env[userID]]==PATS;$emoji[$emojiID[pats_logo]] ;]$if[$getMemberVar[memberIsVerified;$env[userID]]==true;✅;]$if[$getMemberVar[memberIsStaff;$env[userID]]==true;🛡️;]$if[$getMemberVar[memberIsActive;$env[userID]]==true;💬;]$if[$getMemberVar[badge_diadasmulheres;$env[userID]]==true;<:badge_diadasmulheres:1480234134742896842>;]$if[$getMemberVar[badge_cobaia;$env[userID]]==true;⚠️;]$if[$hasRoles[$guildID;$authorID;1481733329899491431]==true;💧;]]

        $return[$get[badges]]
`
}]