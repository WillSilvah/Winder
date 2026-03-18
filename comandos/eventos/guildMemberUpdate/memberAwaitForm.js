module.exports = {
 type: 'guildMemberUpdate',
 code: `$stop
 $onlyIf[$checkContains[$oldMember[addedRoles];1467496885664092201]==true;]

 $if[$isUserDMEnabled[$authorID]==true;
  $sendDM[$authorID;
   $addContainer[
   $addTextDisplay[### RECEBEMOS SEU FORMULÁRIO!]
]
]
]

`
}