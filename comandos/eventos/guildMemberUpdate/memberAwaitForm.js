module.exports = {
 type: 'guildMemberUpdate',
 code: `
 $onlyIf[$checkContains[$oldMember[addedRoles];1467496885664092201]==true;]

 $if[$isUserDMEnabled[$authorID]==true;
  $sendDM[$authorID;
   $addContainer[
    $addSection[
    $addTextDisplay[## RECEBEMOS O SEU FORMULÁRIO!]
    $addTextDisplay[Em breve, você poderá receber uma resposta sobre a sua candidatura, não vai demorar muito.]
    $addThumbnail[https://i.ibb.co/F47676pR/pats-orange-light.png]
    ]
   ;Orange]
  ]
 ]
 
 $memberRemoveRoles[$guildID;$authorID;1467496885664092201]

`
}