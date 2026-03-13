module.exports = {
    code: `
    $let[userID;$option[user]]
    $interactionReply[**BETA** <@$authorID> Aqui está as advertências de **@$get[userID]**!
    $attachment[$getMemberVar[warnList;$get[userID]];WinderDB_WarnList_$userTag[$get[userID]];true]
    ]
  `,
    data: {
  "type": 1,
  "name": "avisos",
  "description": "Veja quantas advertências um membro teve.",
  "options": [
    {
      "type": 6,
      "description": "Usuário",
      "required": true,
      "name": "user"
    }
  ],
  "default_member_permissions": "2"
},
}
