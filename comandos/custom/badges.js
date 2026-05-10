module.exports = [{
    name: "badges",
    params: [
    {
      name: 'userID',
      description: "ID do usuário",
      required: true
    }
   ],
   code: `$if[$memberExists[$guildID;$env[userID]]==true;
    $let[badges;$if[$userGuildTag[$env[userID]]==PATS;$emoji[$emojiID[pats_logo]] ;]$if[$getMemberVar[memberIsVerified;$env[userID]]==true;✅;]$if[$getMemberVar[memberIsStaff;$env[userID]]==true;🛡️;]$if[$getMemberVar[memberIsActive;$env[userID]]==true;💬;]$if[$hasRoles[$guildID;$env[userID];1480183732932444192]==true;<:badge_diadasmulheres:1480234134742896842>;]$if[$hasRoles[$guildID;$env[userID];1481726102261993644]==true;⚠️;]$if[$hasRoles[$guildID;$env[userID];1481733329899491431]==true;💧;]$if[$hasRoles[$guildID;$env[userID];1503017802351513771]==true;🩷;]$if[$hasRoles[$guildID;$env[userID];1490094785644593203]==true;💊;]$if[$hasRoles[$guildID;$env[userID];1503057129739780267]==true;<:pinw_cyan:1503058142831841382>;]]

        $return[$get[badges]]
        ]
`
}]